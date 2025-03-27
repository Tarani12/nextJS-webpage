"use client";
import { useState, useEffect } from "react";

export default function ExamTabs() {
    const [activeTab, setActiveTab] = useState("ongoing");
    const [searchQuery, setSearchQuery] = useState("");

    const exams = {
        previous: [
            { name: "Maths Test", date: "March 15, 2025", status: "Completed", score: "85%", canView: true },
            { name: "Physics Quiz", date: "March 18, 2025", status: "Completed", score: "78%", canView: true },
            { name: "English Mock Test", date: "March 10, 2025", status: "Practice Test", canView: false },
            { name: "Computer Science Quiz", date: "March 12, 2025", status: "Not Attempted", canView: false },
            { name: "History Exam", date: "March 05, 2025", status: "Completed", score: "91%", canView: true },
            { name: "Economics Test", date: "March 07, 2025", status: "Not Attempted", canView: false },
            { name: "Biology Midterm", date: "March 09, 2025", status: "Completed", score: "88%", canView: true },
            { name: "Geography Test", date: "March 11, 2025", status: "Practice Test", canView: false },
            { name: "Psychology Quiz", date: "March 13, 2025", status: "Completed", score: "79%", canView: true },
            { name: "Sociology Test", date: "March 14, 2025", status: "Not Attempted", canView: false },
        ],
        ongoing: [
            { name: "Chemistry Midterm", date: "March 26, 2025", timeLeft: 900, status: "start" },
            { name: "Biology Quiz", date: "March 26, 2025", timeLeft: 3600, status: "resume" },
        ],
        upcoming: [
            { name: "English Test", date: "March 30, 2025", status: "Scheduled" },
            { name: "Computer Science Exam", date: "April 5, 2025", status: "Scheduled" },
            { name: "Physics Final Exam", date: "April 10, 2025", status: "Scheduled" },
            { name: "Mathematics Board Test", date: "April 15, 2025", status: "Scheduled" },
        ],
    };

    const [timers, setTimers] = useState(exams.ongoing.map((exam) => exam.timeLeft));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((time) => (time > 0 ? time - 1 : 0))
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}m ${sec}s`;
    };

    const filteredExams = exams[activeTab].filter((exam) =>
        exam.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-4">
            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Tabs */}
            <ul className="nav nav-tabs justify-content-center">
                {["previous", "ongoing", "upcoming"].map((tab) => (
                    <li className="nav-item" key={tab}>
                        <button
                            className={`nav-link ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Exam List (2 Columns) */}
            <div className="row mt-3">
                {filteredExams.map((exam, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <div className="card p-3 shadow-sm">
                            <h5>{exam.name}</h5>
                            <p className="text-muted">{exam.date}</p>

                            {/* Ongoing Exam Countdown */}
                            {activeTab === "ongoing" && (
                                <>
                                    <p className={exam.status === "start" ? "text-success fw-bold" : "text-danger fw-bold"}>
                                        Time Left: {formatTime(timers[index])}
                                    </p>
                                    {exam.status === "start" ? (
                                        <button className="btn" style={{ backgroundColor: "#90EE90", color: "black" }}>
                                            Start Now
                                        </button>
                                    ) : (
                                        <button className="btn" style={{ backgroundColor: "#FA8072", color: "black" }}>
                                            Resume Exam
                                        </button>
                                    )}
                                </>
                            )}

                            {/* Previous Exam Details */}
                            {activeTab === "previous" && (
                                <>
                                    <p className={`fw-bold ${exam.status === "Completed" ? "text-success" : "text-warning"}`}>
                                        {exam.status}
                                    </p>
                                    {exam.canView ? (
                                        <>
                                            <p className="text-primary fw-bold">Score: {exam.score}</p>
                                            <button className="btn btn-secondary">View Questions</button>
                                        </>
                                    ) : null}
                                </>
                            )}

                            {/* Upcoming Exam Options */}
                            {activeTab === "upcoming" && (
                                <>
                                    <button className="btn" style={{ backgroundColor: "#F8C471", color: "black" }}>
                                        Set Reminder
                                    </button>

                                    <button className="btn" style={{ backgroundColor: "#85C1E9", color: "white" }}>
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
