document.addEventListener('DOMContentLoaded', function() {
    // Extract student data from the provided Excel information
    const classListData = [
        { id: '145875', name: 'ALAGASE JAN EDREN BARRIENTOS', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146727', name: 'ALINDAJAO DESIREE SAMPANI', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146473', name: 'BAGUIO JERLY JOY BESANDE', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146132', name: 'BANLASAN BRYLLE RAVEN GERSALINA', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '147872', name: 'BARTOLOME ROXIE JANE ALCANTARA', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '147826', name: 'BEGORNIA ADRIAN PAUL GOMEZ', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146491', name: 'BESAGAS FRITZ ANDREI ELNORO', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146379', name: 'BUCAYONG ALLEN JOSEPH MORALES', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146472', name: 'CALIZAR KARL JUN MILLAN', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '147366', name: 'CAÑETE TRACY BIANCA CUESTAS', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146760', name: 'CARILLO RJ MEA SUMALILING', dept: '03', year: '1', sex: 'F', course: 'FM' },
        { id: '146262', name: 'CORDOVA CHLOE JAPHET SENONIS', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146358', name: 'DEGAMO ADRIANE P', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '145179', name: 'DELA PEÑA REY JR. GUTUAL', dept: '06', year: '2', sex: 'M', course: 'EE' },
        { id: '146391', name: 'DUREMDES KHARRELLE FINNEY', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '145829', name: 'ECHAVEZ SHANEN JANE MATURAN', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '145726', name: 'ENANORIA MARK JOHN BARREZA', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146424', name: 'ERMAC NIKKI GOC-ONG', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146351', name: 'FACUNDO TRISHA GANAL', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146230', name: 'FORRO QIAN JEDMARR GALAMAY', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '145760', name: 'FUENTES SHEN JL BLESELLE TACULOD', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146476', name: 'GAUDIOSO CARL PATRICK ORDANEZA', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146032', name: 'GENOVIA PRIMO JUAN IMMANUELLE LASTIMOSO', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146068', name: 'LANDIM JOHN MARK MANGUBAT', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '145967', name: 'LLANOS JHANALYN ABAYATO', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '147716', name: 'LOJA JOSE JOENARD LAGARDE', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '147288', name: 'LONGYAPON QUEENRICH INDONG', dept: '03', year: '1', sex: 'F', course: 'FM' },
        { id: '148009', name: 'LUMAKANG MERTIN LLUBEN CABATAN', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '147341', name: 'LUMOCHO JAY MARK CAGADAS', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '128156', name: 'MAGCANTARA CARINE MAE BASTIDA', dept: '30', year: '2', sex: 'F', course: 'IT' },
        { id: '146041', name: 'MATALIB MELVIN MANGILID', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '145781', name: 'MELLEJOR MARK DAVE BERNANDINO', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '147176', name: 'MUNDIZ JAY MARK ROSQUITES', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146520', name: 'NECANOR CHRISTY LYNN VILLARENTE', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '146096', name: 'OCHAVILLO SIDRAY TORRES', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146113', name: 'PABLO ISRAEL XERIXCES BALTAR', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146395', name: 'PANGAN ORVEN JULIUS MAGHUYOP', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '149606', name: 'SABANAL JECHELLE MAE BATAUSA', dept: '30', year: '1', sex: 'F', course: 'IT' },
        { id: '145780', name: 'TARZO SHAWN RUSSELL GAMOLO', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146134', name: 'TORRES RICHARD ANDRIE FAMAT', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146834', name: 'VILORIA JAY LLOYD LEGASPI', dept: '30', year: '1', sex: 'M', course: 'IT' },
        { id: '146939', name: 'YECYEC WYNDY SHANE GALLETO', dept: '30', year: '1', sex: 'F', course: 'IT' }
    ];

    // Initialize students array from localStorage or create new one
    let students = JSON.parse(localStorage.getItem('students')) || [];
    
    // If no students in localStorage, initialize with classListData
    if (students.length === 0) {
        students = classListData.map(student => ({
            ...student,
            paid: false,
            paymentDate: null,
            paymentAmount: 0
        }));
        saveStudents();
    }

    // DOM elements
    const studentIdInput = document.getElementById('student-id');
    const checkIdBtn = document.getElementById('check-id');
    const paymentAmountInput = document.getElementById('payment-amount');
    const paidList = document.getElementById('paid-list');
    const unpaidList = document.getElementById('unpaid-list');
    const paidCount = document.getElementById('paid-count');
    const unpaidCount = document.getElementById('unpaid-count');
    const totalCollected = document.getElementById('total-collected');
    const statusMessage = document.getElementById('status-message');
    const generateReportBtn = document.getElementById('generate-report');
    const reportDiv = document.getElementById('report');
    const newStudentIdInput = document.getElementById('new-student-id');
    const newStudentNameInput = document.getElementById('new-student-name');
    const addStudentBtn = document.getElementById('add-student');

    // Initialize the UI
    updateUI();

    // Event listeners
    checkIdBtn.addEventListener('click', processPayment);
    studentIdInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processPayment();
        }
    });
    
    generateReportBtn.addEventListener('click', generateReport);
    addStudentBtn.addEventListener('click', addNewStudent);

    // Process payment for a student
    function processPayment() {
        const id = studentIdInput.value.trim();
        const paymentAmount = parseFloat(paymentAmountInput.value) || 10;
        
        if (!id) {
            showMessage('Please enter a student ID', 'error');
            return;
        }
        
        const studentIndex = students.findIndex(s => s.id === id);
        
        if (studentIndex === -1) {
            showMessage('Student ID not found', 'error');
            return;
        }
        
        if (students[studentIndex].paid) {
            showMessage('This student has already paid', 'error');
            return;
        }
        
        // Update student payment status
        students[studentIndex].paid = true;
        students[studentIndex].paymentDate = new Date().toISOString();
        students[studentIndex].paymentAmount = paymentAmount;
        
        saveStudents();
        updateUI();
        showMessage(`Payment recorded for ${students[studentIndex].name}`, 'success');
        studentIdInput.value = '';
        studentIdInput.focus();
    }

    // Add a new student to the list
    function addNewStudent() {
        const id = newStudentIdInput.value.trim();
        const name = newStudentNameInput.value.trim();
        
        if (!id || !name) {
            showMessage('Please enter both ID and name', 'error');
            return;
        }
        
        if (students.some(s => s.id === id)) {
            showMessage('Student ID already exists', 'error');
            return;
        }
        
        const newStudent = {
            id,
            name,
            dept: '00', // Default department
            year: '1',  // Default year
            sex: 'U',   // Unknown sex
            course: 'GEN', // General course
            paid: false,
            paymentDate: null,
            paymentAmount: 0
        };
        
        students.push(newStudent);
        saveStudents();
        updateUI();
        showMessage(`Added new student: ${name}`, 'success');
        newStudentIdInput.value = '';
        newStudentNameInput.value = '';
        newStudentIdInput.focus();
    }

    // Remove a student from the paid list
    function removePayment(studentId) {
        const studentIndex = students.findIndex(s => s.id === studentId);
        
        if (studentIndex !== -1) {
            students[studentIndex].paid = false;
            students[studentIndex].paymentDate = null;
            students[studentIndex].paymentAmount = 0;
            
            saveStudents();
            updateUI();
            showMessage('Payment removed', 'success');
        }
    }

    // Save students to localStorage
    function saveStudents() {
        localStorage.setItem('students', JSON.stringify(students));
    }

    // Update the UI with current data
    function updateUI() {
        // Clear lists
        paidList.innerHTML = '';
        unpaidList.innerHTML = '';
        
        // Count paid and unpaid students
        let paid = 0;
        let unpaid = 0;
        let total = 0;
        
        // Sort students alphabetically by last name
        const sortedStudents = [...students].sort((a, b) => {
            const lastNameA = a.name.split(' ')[0];
            const lastNameB = b.name.split(' ')[0];
            return lastNameA.localeCompare(lastNameB);
        });
        
        // Populate lists
        sortedStudents.forEach(student => {
            if (student.paid) {
                paid++;
                total += student.paymentAmount;
                
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card paid-student';
                studentCard.innerHTML = `
                    <strong>${student.name}</strong>
                    <div>ID: ${student.id}</div>
                    <div>Paid: ₱${student.paymentAmount}</div>
                    <div>${new Date(student.paymentDate).toLocaleString()}</div>
                    <button class="remove-btn" data-id="${student.id}">×</button>
                `;
                paidList.appendChild(studentCard);
            } else {
                unpaid++;
                
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card unpaid-student';
                studentCard.innerHTML = `
                    <strong>${student.name}</strong>
                    <div>ID: ${student.id}</div>
                    <div>Course: ${student.course}</div>
                `;
                unpaidList.appendChild(studentCard);
            }
        });
        
        // Update counters
        paidCount.textContent = paid;
        unpaidCount.textContent = unpaid;
        totalCollected.textContent = total.toFixed(2);
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                removePayment(this.getAttribute('data-id'));
            });
        });
    }

    // Generate and display a report
    function generateReport() {
        // Sort students alphabetically by last name
        const sortedStudents = [...students].sort((a, b) => {
            const lastNameA = a.name.split(' ')[0];
            const lastNameB = b.name.split(' ')[0];
            return lastNameA.localeCompare(lastNameB);
        });
        
        let reportHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Year</th>
                        <th>Payment Status</th>
                        <th>Amount</th>
                        <th>Date Paid</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        sortedStudents.forEach(student => {
            reportHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.year}</td>
                    <td>
                        <span class="paid-status ${student.paid ? 'paid-true' : 'paid-false'}"></span>
                        ${student.paid ? 'Paid' : 'Unpaid'}
                    </td>
                    <td>${student.paid ? '₱' + student.paymentAmount.toFixed(2) : '-'}</td>
                    <td>${student.paid ? new Date(student.paymentDate).toLocaleDateString() : '-'}</td>
                </tr>
            `;
        });
        
        reportHTML += `
                </tbody>
            </table>
            <div class="report-summary">
                <p><strong>Total Paid:</strong> ${students.filter(s => s.paid).length}</p>
                <p><strong>Total Unpaid:</strong> ${students.filter(s => !s.paid).length}</p>
                <p><strong>Total Collected:</strong> ₱${students.reduce((sum, s) => sum + s.paymentAmount, 0).toFixed(2)}</p>
            </div>
        `;
        
        reportDiv.innerHTML = reportHTML;
    }

    // Show status message
    function showMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = 'status-message ' + type;
        
        // Clear message after 3 seconds
        setTimeout(() => {
            statusMessage.textContent = '';
            statusMessage.className = 'status-message';
        }, 3000);
    }
});