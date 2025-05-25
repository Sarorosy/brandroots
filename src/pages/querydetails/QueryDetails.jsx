// src/pages/QueryDetails.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmailDiv from "./EmailDiv";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
};

// Helper to format Unix timestamps (if your timestamps like "1747904896" are Unix in seconds)
const formatDate = (ts, options) => {
    if (!ts) return null;
    // convert to milliseconds
    const date = new Date(parseInt(ts, 10) * 1000);
    if (isNaN(date)) return null;
    return date.toLocaleDateString(undefined, options);
};

const formatDateTime = (ts) => {
    if (!ts) return null;
    const date = new Date(parseInt(ts, 10) * 1000);
    if (isNaN(date)) return null;
    return date.toLocaleString();
};

const QueryDetails = ({ selectedQuery, onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
    };
    const statusOptions = [
        { value: "1", label: "Lead In" },
        { value: "2", label: "Contact Made" },
        { value: "3", label: "Quoted" },
        { value: "4", label: "Negotiating" },
        { value: "5", label: "Converted" },
        { value: "6", label: "Client Not Interested" },
        { value: "7", label: "Reminder" },
        { value: "8", label: "Lost Deals" },
        { value: "9", label: "Contact Not Made" },
        { value: "10", label: "Cross Sell" },
        { value: "11", label: "Under Validation" },
    ];
    // Define fields to display with keys and labels
    const fieldsToShow = [
        { label: "Ref. No.", key: "assign_id", fallback: "Not provided" },
        { label: "Referred By", key: "referred_by", fallback: "Not provided" },
        { label: "Profile", key: "profile_id", fallback: "Not provided" },
        { label: "Name", key: "name", fallback: "Not provided" },
        { label: "Email", key: "email_id", fallback: "Not provided" },
        { label: "Alternate Email ID", key: "validation_email_read", fallback: "Not provided" },
        { label: "Contact No.", key: "phone", fallback: "Not provided" },
        { label: "Alternate Contact No.", key: "assign_contact_by", fallback: "Not provided" },
        { label: "Address", key: "location", fallback: "Not provided" },
        { label: "Topic/Area of Study", key: "requirement_name", fallback: "Not provided" },
        { label: "Service", key: "other_requirement", fallback: "Topic Selection" },
        { label: "Location", key: "location", fallback: "Not provided" },
        { label: "City", key: "city", fallback: "Not provided" },
        { label: "Company Name", key: "company_id", fallback: "Not provided" },
        { label: "Website", key: "website_name", fallback: "Not provided" },
        { label: "Allocated To", key: "assign_campaign_user", fallback: "Not provided" },
        { label: "Manager Name", key: "prev_user_name", fallback: "Not provided" },
        { label: "Priority", key: "priority", fallback: "Not provided" },
        { label: "Academic Level", key: "academic_level", fallback: "Not provided" },
        { label: "Follow Up Date", key: "follow_up_date", fallback: "Not provided", isDate: true },
        { label: "Query Created Date", key: "assign_date", fallback: "Not provided", isDateTime: true },
        { label: "Tags", key: "tags", fallback: "No tags available" },
        { label: "Requirement", key: "requirement", fallback: "Not provided" },
        { label: "Uploaded Files", key: "uploaded_files", fallback: "Not provided" }, // Assuming this exists or can be empty
        { label: "Query Status", key: "update_status", fallback: "Not provided" },
    ];

    if (!selectedQuery) {
        return (
            <motion.div
                className="p-4 text-sm max-w-md mx-auto mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <p>No query selected.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-600 underline mt-2"
                >
                    Go Back
                </button>
            </motion.div>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={handleClose}
            >
                <motion.div
                    className="bg-white rounded-lg shadow-2xl flex w-full max-w-[98vw] max-h-[98vh] overflow-hidden"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    style={{ fontSize: "12px" }}
                >
                    {/* Left side - details */}
                    <div className="w-2/6 bg-gradient-to-b from-indigo-50 to-indigo-100 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-4 border-b border-indigo-300 pb-2">
                            <h2 className="text-lg font-semibold text-indigo-900">Query Details</h2>
                            <button
                                onClick={onClose}
                                aria-label="Close modal"
                                className="text-indigo-700 hover:text-red-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-1 space-y-3 pr-2">
                            {fieldsToShow.map(({ label, key, fallback, isDate, isDateTime }) => {
                                let value = selectedQuery[key];

                                // Special handling:
                                if (isDate) {
                                    value = formatDate(value, { year: 'numeric', month: 'numeric', day: 'numeric' });
                                } else if (isDateTime) {
                                    value = formatDateTime(value);
                                }

                                if (key == "update_status") {
                                    const statusObj = statusOptions.find(opt => opt.value === value);
                                    value = statusObj ? statusObj.label : fallback;
                                }

                                // For empty strings, null or 0 (if 0 means not provided)
                                if (
                                    value === null ||
                                    value === undefined ||
                                    value === "" ||
                                    value === "null" ||
                                    (typeof value === "string" && value.trim() === "") ||
                                    (value === 0 && key !== "assign_id") // assign_id might be 0 but valid ref no, adjust if needed
                                ) {
                                    value = fallback;
                                }

                                // Format some known keys that might be IDs:
                                if (key === "company_id" && value !== fallback) {
                                    // If you want to show actual company name instead of ID, replace here.
                                    // For now, just show the ID
                                    value = `Company #${value}`;
                                }
                                if (key === "profile_id" && value !== fallback) {
                                    value = `Profile #${value}`;
                                }
                                if (key === "assign_campaign_user" && value !== fallback) {
                                    value = `User #${value}`;
                                }

                                return (
                                    <div key={key} className="border-b border-indigo-300 pb-1 last:border-b-0">
                                        <strong className="capitalize text-indigo-700">{label}:</strong>{" "}
                                        <span className="text-indigo-900">{value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side - empty styled area */}
                    <div className="w-4/6 bg-white flex items-center justify-center border-l border-indigo-200 p-6">
                        Email Coming soon
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default QueryDetails;
