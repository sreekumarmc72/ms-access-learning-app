import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomView.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button, Table } from "react-bootstrap";

const questions = [
    {
        question: "Query to Identify Students Attending May 2025 Examination",
        answer: "SELECT ID, Name, Address, Contact, JoinDate, Attempt_of_exam FROM student_details WHERE Attempt_of_exam = 'May 2025';"
    },
    {
        question: "Query to Identify Students Attending December 2024 Examination",
        answer: "SELECT ID, Name, Address, Contact, JoinDate, Attempt_of_exam FROM student_details WHERE Attempt_of_exam = 'December 2024';"
    }
];

const Answer = () => {
    const [file, setFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [fieldValues, setFieldValues] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [invalidAnswers, setInvalidAnswers] = useState([]);

    const handleInputChange = (index, value) => {
        setFieldValues((prevValues) => ({
            ...prevValues,
            [index]: value,
        }));
        setInvalidAnswers(prev => prev.filter(i => i !== index));
    };

    const validateAnswers = () => {
        const invalid = [];
        questions.forEach((question, index) => {
            if (!fieldValues[index] || fieldValues[index].trim() === '') {
                invalid.push(index);
            } else if (fieldValues[index] !== question.answer) {
                invalid.push(index);
            }
        });
        setInvalidAnswers(invalid);
        return invalid.length === 0;
    };

    const handleValidateButton = () => {
        // Check for empty input fields first
        const emptyFields = questions.some((_, index) => !fieldValues[index] || fieldValues[index].trim() === '');
        if (emptyFields) {
            setErrorMessage("Please fill all input field values");
            return;
        }

        // Validate answers
        const answersValid = validateAnswers();
        if (!answersValid) {
            setErrorMessage("Some answers are incorrect. Please check highlighted fields.");
            return;
        }

        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFile(null);
        setFieldValues({});
        setErrorMessage("");
        setInvalidAnswers([]);
    };

    return (
        <div>
            <div className="container answer-block">
                {questions.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="row mb-4">
                            <div className="col-md-6 d-flex align-items-center" style={{ textAlign: "left", marginTop: index > 0 ? "20px" : "0" }}>
                                <label className="form-label qn-label" style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                                    {item.question}
                                </label>
                            </div>
                            <div className="col-md-6" style={{marginTop: index > 0 ? "20px" : "0" }}>
                                <textarea
                                    className="input-field"
                                    placeholder="Enter your answer here"
                                    value={fieldValues[index] || ""}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    style={{
                                        backgroundColor: invalidAnswers.includes(index) ? '#FCE8F1' : '#fff',
                                        border: `1px solid ${invalidAnswers.includes(index) ? '#B52556' : '#ccc'}`,
                                        borderRadius: "5px",
                                        padding: "10px",
                                        width: "100%",
                                        textAlign: "left",
                                        boxShadow: invalidAnswers.includes(index) ? '0px 0px 5px #B52556' : 'none'
                                    }}
                                    rows={5}
                                />
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Bottom Section with Validate Button */}
            <div className="bottom-section" style={{ backgroundColor: errorMessage ? '#FCE8F1' : '#fff' }}>
                <div className="errors-found">
                    {errorMessage && (
                        <div>
                            <img src={require('./error.png')} alt="Warning" style={{ width: "30px", marginRight: "13px" }} />
                            <span>Errors found!</span>
                        </div>
                    )}
                </div>
                <div className="col text-right">
                    <button
                        className="validate-btn"
                        onClick={handleValidateButton}
                    >
                        {errorMessage ? "Retry" : "Validate"}
                    </button>
                </div>
            </div>

            {/* Success Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body style={{ background: "linear-gradient(to bottom, #e0f7fa 0%, #fff 100%)" }}>
                    <div className="text-center" style={{ margin: "20px 20px", fontSize: "21px" }}>
                        <img src={require('./degree.png')} alt="Success" style={{ width: "250px", marginBottom: "20px" }} />
                        <p style={{ fontWeight: "bold", fontSize: "30px" }}>Congratulations!</p>
                        <p>You have completed the task successfully.</p>
                        
                        <Button className="done-btn mt-3 mb-3" onClick={handleCloseModal}>
                            Done
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Answer;

