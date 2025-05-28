import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  // Generate time slots from 9 AM to 7 PM (every 30 minutes)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 19; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 19) slots.push(`${hour}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Get calendar data
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:${minute} ${ampm}`;
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (clickedDate >= today) {
      setSelectedDate(clickedDate);
    }
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.reason) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the booking data to your backend
    toast.success(`Appointment booked successfully!\n\nDate: ${selectedDate.toDateString()}\nTime: ${formatTime(selectedTime)}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.reason}`);
    
    // Reset everything
    setFormData({ name: '', email: '', phone: '', reason: '' });
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentStep(1);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    setSelectedDate(null);
  };

  const canProceedFromStep1 = selectedDate !== null;
  const canProceedFromStep2 = selectedTime !== null;

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Add day headers
    dayNames.forEach(day => {
      days.push(
        <div key={day} className="text-center font-semibold text-textGray py-2">
          {day}
        </div>
      );
    });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isToday = dayDate.toDateString() === new Date().toDateString();
      const isPast = dayDate < today;
      const isSelected = selectedDate && dayDate.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          onClick={() => !isPast && handleDateClick(day)}
          className={`
            p-3 text-center cursor-pointer border border-gray-200 transition-all duration-200 hover:bg-tealLight hover:bg-opacity-20
            ${isPast ? 'text-gray-300 cursor-not-allowed bg-gray-50' : 'text-gray-700 hover:text-primary'}
            ${isToday ? 'bg-primary text-white font-bold' : ''}
            ${isSelected ? 'bg-tealMedium text-white' : ''}
          `}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step, index) => (
          <React.Fragment key={step}>
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300
              ${currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-textGray'}
            `}>
              {step}
            </div>
            {index < 2 && (
              <div className={`
                w-12 h-1 mx-2 transition-all duration-300
                ${currentStep > step ? 'bg-primary' : 'bg-gray-200'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6" />
          Select a Date
        </h2>
        <p className="text-textGray">Choose your preferred appointment date</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 rounded-full hover:bg-tealLight hover:bg-opacity-20 text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-semibold text-primary">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 rounded-full hover:bg-tealLight hover:bg-opacity-20 text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {renderCalendar()}
        </div>

        {selectedDate && (
          <div className="mt-4 p-3 bg-tealLight bg-opacity-20 rounded-md text-center">
            <p className="text-primary font-medium">
              Selected: {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        )}

        <div className="mt-4 text-sm text-textGray">
          <p>• Past dates are not available for booking</p>
          <p>• Click on a date to select it</p>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <Clock className="w-6 h-6" />
          Select a Time
        </h2>
        <p className="text-textGray">Choose your preferred appointment time</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-4 p-3 bg-tealLight bg-opacity-20 rounded-md text-center">
          <p className="text-primary font-medium">
            <Clock size={15} className='text-primary' /> {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <h3 className="text-lg font-semibold text-primary mb-4">Available Times</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSlotClick(time)}
              className={`
                p-3 text-sm rounded-md border transition-all duration-200
                ${selectedTime === time 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white border-gray-300 hover:border-tealMedium hover:bg-tealLight hover:bg-opacity-10 text-gray-700'
                }
              `}
            >
              {formatTime(time)}
            </button>
          ))}
        </div>

        {selectedTime && (
          <div className="mt-4 p-3 bg-tealLight bg-opacity-20 rounded-md text-center">
            <p className="text-primary font-medium">
              Selected Time: {formatTime(selectedTime)}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <User className="w-6 h-6" />
          Your Information
        </h2>
        <p className="text-textGray">Fill in your details to confirm the appointment</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-6 p-4 bg-tealLight bg-opacity-20 rounded-md">
          <h3 className="font-semibold text-primary mb-2">Appointment Summary</h3>
          <p className="text-primary flex items-center">
             <Calendar size={15} className='text-primary' />  {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-primary flex items-center"> <Clock size={15} className='text-primary' />  {formatTime(selectedTime)}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <MessageSquare className="w-4 h-4" />
              Reason for Appointment *
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleFormChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Briefly describe the reason for your appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Book Your Appointment
        </h1>
        <p className="text-textGray">Follow the steps below to schedule your appointment</p>
      </div>

      {renderStepIndicator()}

      <div className="mb-8">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200
            ${currentStep === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-primary hover:bg-tealLight hover:bg-opacity-20'
            }
          `}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !canProceedFromStep1) ||
              (currentStep === 2 && !canProceedFromStep2)
            }
            className={`
              flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200
              ${((currentStep === 1 && !canProceedFromStep1) || (currentStep === 2 && !canProceedFromStep2))
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-tealMedium'
              }
            `}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleFormSubmit}
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-tealMedium transition-colors duration-200 font-medium"
          >
            Confirm Appointment
          </button>
        )}
      </div>

      {/* Step Descriptions */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-textGray">
          <div className={`p-3 rounded-md ${currentStep === 1 ? 'bg-tealLight bg-opacity-20' : ''}`}>
            <div className="font-medium text-primary">Step 1</div>
            <div>Choose Date</div>
          </div>
          <div className={`p-3 rounded-md ${currentStep === 2 ? 'bg-tealLight bg-opacity-20' : ''}`}>
            <div className="font-medium text-primary">Step 2</div>
            <div>Select Time</div>
          </div>
          <div className={`p-3 rounded-md ${currentStep === 3 ? 'bg-tealLight bg-opacity-20' : ''}`}>
            <div className="font-medium text-primary">Step 3</div>
            <div>Your Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;