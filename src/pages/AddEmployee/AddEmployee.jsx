import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        employeeId: '',
        fullName: '',
        email: '',
        phone: '',
        aadhar: '',
        pan: '',
        address: '',
        city: '',
        state: '',
        country: 'India',
        position: '',
        department: '',
        hireDate: '',
        salary: '',
        status: 'Active',
        emergencyContact: '',
        dateOfBirth: '',
        gender: 'Male',
        maritalStatus: 'Single',
        bloodGroup: '',
        qualifications: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const positions = [
        'Director',
        'HR-Manager',
        'Supervisor',
        'Site Incharge',
        'Safety Supervisor',
        'Operations Manager',
        'Engineer',
        'Technician',
        'Accountant',
        'Office Assistant'
    ];

    const departments = [
        'Management',
        'Human Resources',
        'Operations',
        'Safety',
        'Engineering',
        'Finance',
        'Administration',
        'Production'
    ];

    const validateForm = () => {
        const newErrors = {};

        // Employee ID validation
        if (!formData.employeeId.trim()) {
            newErrors.employeeId = 'Employee ID is required';
        }

        // Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Invalid Indian phone number';
        }

        // Aadhar validation (12 digits)
        const aadharRegex = /^\d{12}$/;
        if (!formData.aadhar.trim()) {
            newErrors.aadhar = 'Aadhar number is required';
        } else if (!aadharRegex.test(formData.aadhar)) {
            newErrors.aadhar = 'Aadhar must be 12 digits';
        }

        // PAN validation
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!formData.pan.trim()) {
            newErrors.pan = 'PAN number is required';
        } else if (!panRegex.test(formData.pan.toUpperCase())) {
            newErrors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Format phone number input
        if (name === 'phone') {
            const cleaned = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                [name]: cleaned
            });
        } else if (name === 'pan') {
            // Auto-uppercase PAN
            setFormData({
                ...formData,
                [name]: value.toUpperCase()
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        // Clear error for this field
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add employee');
            }

            const result = await response.json();
            console.log('Employee added successfully:', result);

            alert('✅ Employee added successfully!');
            navigate('/employees');

        } catch (error) {
            console.error('Error adding employee:', error);
            alert(`❌ Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        if (window.confirm('Are you sure? All unsaved changes will be lost.')) {
            navigate('/employees');
        }
    };

    return (
        <div className="add-employee-page">
            <div className="page-header">
                <div className="header-content">
                    <h1>Add New Employee</h1>
                    <p>Complete the form below to register a new employee in the system</p>
                </div>
                <button className="secondary-btn" onClick={handleCancel}>
                    ⬅ Back to Employees
                </button>
            </div>

            <form className="employee-form" onSubmit={handleSubmit} noValidate>
                {/* Personal Information Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h3>👤 Personal Information</h3>
                        <span className="required-note">* Required fields</span>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="employeeId">Employee ID *</label>
                            <input
                                type="text"
                                id="employeeId"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                required
                                placeholder="EMP2024001"
                                className={errors.employeeId ? 'error' : ''}
                            />
                            {errors.employeeId && <span className="error-message">{errors.employeeId}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className={errors.fullName ? 'error' : ''}
                            />
                            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john.doe@company.com"
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="9876543210"
                                maxLength="10"
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="aadhar">Aadhar Number *</label>
                            <input
                                type="text"
                                id="aadhar"
                                name="aadhar"
                                value={formData.aadhar}
                                onChange={handleChange}
                                required
                                placeholder="1234 5678 9012"
                                maxLength="12"
                                className={errors.aadhar ? 'error' : ''}
                            />
                            {errors.aadhar && <span className="error-message">{errors.aadhar}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="pan">PAN Number *</label>
                            <input
                                type="text"
                                id="pan"
                                name="pan"
                                value={formData.pan}
                                onChange={handleChange}
                                required
                                placeholder="ABCDE1234F"
                                maxLength="10"
                                className={errors.pan ? 'error' : ''}
                            />
                            {errors.pan && <span className="error-message">{errors.pan}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Employment Details Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h3>💼 Employment Details</h3>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="position">Position *</label>
                            <select
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                                className={errors.position ? 'error' : ''}
                            >
                                <option value="">Select Position</option>
                                {positions.map((pos, index) => (
                                    <option key={index} value={pos}>{pos}</option>
                                ))}
                            </select>
                            {errors.position && <span className="error-message">{errors.position}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="department">Department *</label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept, index) => (
                                    <option key={index} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hireDate">Joining Date *</label>
                            <input
                                type="date"
                                id="hireDate"
                                name="hireDate"
                                value={formData.hireDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="salary">Monthly Salary (₹)</label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="45000"
                                min="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="status">Employment Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Probation">Probation (3 Months)</option>
                                <option value="On Leave">On Leave</option>
                                <option value="Terminated">Terminated</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Address Information Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h3>🏠 Address Information</h3>
                    </div>
                    <div className="form-grid">
                        <div className="form-group full-width">
                            <label htmlFor="address">Complete Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="House no, Street, Locality"
                                rows="3"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City/Town</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Jamshedpur"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Jharkhand"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="India"
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                {/* Emergency Contact Section */}
                <div className="form-section">
                    <div className="section-header">
                        <h3>Emergency Contact</h3>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="emergencyContact">Emergency Contact Number</label>
                            <input
                                type="tel"
                                id="emergencyContact"
                                name="emergencyContact"
                                value={formData.emergencyContact}
                                onChange={handleChange}
                                placeholder="9876543210"
                                maxLength="10"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={handleCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Adding Employee...
                            </>
                        ) : (
                            'Add Employee'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;