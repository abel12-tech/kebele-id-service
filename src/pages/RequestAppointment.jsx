import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



const RequestAppointment = () => {
    return (
        <>   
        <Navbar/>    
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6">
            <h1 className="text-2xl font-bold text-center mt-28">Schedule for Appointment</h1>

            <div className="space-y-6">
                <section className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    <Link to="/new-kebele-id-form" className="text-xl font-semibold md:w-1/4 text-blue-600 hover:underline">
                        New Kebele Id Appointment
                    </Link>
                    <p className="mt-2 text-gray-600 md:mt-0 md:w-3/4">
                        First time applicants are requested to schedule for an appointment. You receive confirmation via email or SMS. Print the last page which has your appointment date and time. Take the paper with you to your appointment consular.
                    </p>
                </section>
                <section className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    <Link to="/renewal-replacement-form" className="text-xl font-semibold md:w-1/4 text-blue-600 hover:underline">
                        Renewal / Replacement Appointment
                    </Link>
                    <p className="mt-2 text-gray-600 md:mt-0 md:w-3/4">
                        Expired, damaged or page runout (not expired) kebele id, applicants are requested to schedule for an appointment. You receive confirmation via email or SMS. Print the last page which has your appointment date and time. Take the paper with you to your appointment consular.
                    </p>
                </section>
            </div>
        </div>

    <Footer/>
    </>

    );
}

export default RequestAppointment;

