import Navbar from "../components/Navbar";
import ExamTabs from "../components/ExamTabs";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Student Details Section */}
      <div className="container mt-3">
        <div className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-center">
          
          {/* Student Info */}
          <div>
            <span className="fs-5 fw-bold">👤 John Doe</span>
            <div className="text-muted mt-1">🎓 Reg No: 123456</div>
            <div className="text-muted">📘 Branch: 3rd Yr CSE-4</div>
            <div className="text-muted">📧 Email:johndoe@gmail.com</div>
          </div>

          {/* Average Score */}
          <span className="text-success fw-bold fs-5">Avg Score: 85%</span>
        </div>
      </div>

      <div className="container text-center mt-2">
        <ExamTabs />

        {/* Online Exam Guidelines Section */}
        <div className="guidelines-section mt-4 p-3 border rounded">
          <h5 className="fw-bold">📌 Online Exam Guidelines</h5>
          <ul className="list-group">
            <li className="list-group-item">✅ Ensure your <strong>webcam is ON</strong> during the exam.</li>
            <li className="list-group-item">❌ <strong>No tab switching</strong> allowed; switching may lead to disqualification.</li>
            <li className="list-group-item">⚠️ Your <strong>attendance is automatically recorded</strong>.</li>
            <li className="list-group-item">📸 Random <strong>screenshots</strong> will be taken.</li>
            <li className="list-group-item">⏳ Ensure <strong>stable internet</strong>; disconnections might auto-submit your exam.</li>
            <li className="list-group-item">🔕 <strong>No external help</strong> allowed; AI-based monitoring is active.</li>
            <li className="list-group-item">📞 For any <strong>technical issues</strong>, contact the Exam Cell.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
