import React from "react";
import { useImmer } from "use-immer";
import "./assets/styles/styles.css";
import "./App.css";
import Answer from "./Answer";

export const App = () => {
    const [activeTab, setActiveTab] = useImmer("question");
    const handleTabClick = (tab) => {
        setActiveTab((draft) => {
            draft = tab;
            return draft;
        });
    };


    return (
        <>
            <div className="col-lg-8 mb-4 mb-lg-0 main-content">
                <div className="card tab-view-wrapper">
                    <div className="card-header border-0">
                        <div className="tab-header">
                            <div className="tabs d-flex align-items-center">
                                <div
                                    className={`tab ${activeTab === "question" ? "active" : ""}`}
                                    onClick={() => handleTabClick("question")}
                                >
                                    Question
                                </div>

                                <div
                                    className={`tab ${activeTab === "answer" ? "active" : ""}`}
                                    onClick={() => handleTabClick("answer")}
                                >
                                    Answer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="tab-content-block">
                            <div>
                                <div
                                    className="tab-content tab-content-wrapper"
                                    style={{ display: activeTab === "question" ? "block" : "none" }}
                                >


                                    <h4><b>Scenario</b></h4>
                                    <p>
                                        You are a Database Administrator at an educational institution, and you have been tasked with creating select queries
                                        to analyze student attendance for upcoming examinations. Specifically, you need to identify students who are scheduled to take exams in May 2025.
                                    </p>

                                    <h4><b>Your task</b></h4>
                                    <p style={{ fontWeight: "600" }}>Using the following table student_details, create the following select queries in MS Access:</p>

                                    <table style={{ border: "1px solid #ccc", width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                                <th>JoinDate</th>
                                                <th>Attempt_of_exam</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Alice</td>
                                                <td>123 Main St</td>
                                                <td>555-1234</td>
                                                <td>2023-01-15</td>
                                                <td>May 2025</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Bob</td>
                                                <td>456 Elm St</td>
                                                <td>555-5678</td>
                                                <td>2023-02-20</td>
                                                <td>May 2025</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Charlie</td>
                                                <td>789 Oak St</td>
                                                <td>555-8765</td>
                                                <td>2023-03-10</td>
                                                <td>December 2024</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>David</td>
                                                <td>321 Pine St</td>
                                                <td>555-4321</td>
                                                <td>2023-04-05</td>
                                                <td>May 2025</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <p style={{ marginBottom: "0px", marginTop: "20px" }}><b>Query to Identify Students Attending May 2025 Examination</b></p>
                                    <ul>
                                        <li>Write a query to display students who are scheduled to attend the May 2025 examination.</li>
                                    </ul>
                                    {/* answer: 
                                        SELECT ID, Name, Address, Contact, JoinDate, Attempt_of_exam
                                        FROM student_details
                                        WHERE Attempt_of_exam = 'May 2025'; */}

                                    <p style={{ marginBottom: "0px", marginTop: "20px" }}><b>Query to Identify Students Attending December 2024 Examination</b></p>
                                    <ul>
                                        <li>Write a query to display students who are scheduled to attend the December 2024 examination.</li>
                                    </ul>
                                    {/* answer: 
                                        SELECT ID, Name, Address, Contact, JoinDate, Attempt_of_exam
                                        FROM student_details
                                        WHERE Attempt_of_exam = 'December 2024'; */}

                                </div>
                            </div>
                            <div
                                className="tab-content"
                                style={{ display: activeTab === "ref" ? "block" : "none" }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <img src={require('./assets/img/Image-ref.png')} alt="Success" style={{ width: "550px", marginBottom: "40px", marginTop: "40px" }} />
                                </div>
                            </div>
                            <div
                                className="tab-content"
                                style={{ display: activeTab === "answer" ? "block" : "none" }}
                            >
                                <section className="tabele-layout">
                                    <Answer />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
