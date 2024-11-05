import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleBatchChange = (event) => {
    const selectedBatch = parseInt(event.target.value);
    if (isNaN(selectedBatch)) {
      setPaymentAmount(0); // Set to 0 if no batch is selected
    } else if (selectedBatch >= 2000 && selectedBatch <= 2019) {
      setPaymentAmount(1000);
    } else if (selectedBatch >= 2020 && selectedBatch <= 2026) {
      setPaymentAmount(500);
    }
  };

  return (
    <div className="form py-2">
     
      <section className="container my-2  w-50 text-light p-2">
      <div className="container-fluid text-light py-3">
        <header className="text-center">
          <h1 className="display-6">রেজিস্ট্রেশন করুন-- </h1>
        </header>
      </div>
        <form className="row g-3 p-3">
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">নামঃ-</label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="আপনার নাম দিন...." required />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault02" className="form-label">পিতার নামঃ-</label>
            <input type="text" className="form-control" id="validationDefault02" placeholder="আপনার বাবার নাম দিন...." required />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">বর্তমান ঠিকানাঃ-</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="আপনার বর্তমান ঠিকানা দিন...." />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">পেশাঃ-</label>
            <select id="inputState" className="form-select">
              <option selected>পছন্দ করুণ....</option>
              <option>শিক্ষার্থী</option>
              <option>চাকুরিজীবী</option>
              <option>ব্যাবসায়ি</option>
              <option>অন্যান্ন</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputGender" className="form-label">লিঙ্গঃ-</label>
            <select id="inputGender" className="form-select">
              <option selected>পছন্দ করুণ....</option>
              <option>পুরুষ</option>
              <option>মহিলা</option>
              <option>অন্যান্ন</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputBatch" className="form-label">HSC ব্যাচঃ-</label>
            <select id="inputBatch" className="form-select" onChange={handleBatchChange}>
              <option value="">পছন্দ করুণ....</option>
              {Array.from({ length: 27 }, (_, i) => 2000 + i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">উপস্থিতিঃ-</label>
            <select id="inputState" className="form-select">
              <option selected>পছন্দ করুণ....</option>
              <option>১ জন</option>
              <option>২ জন</option>
              <option>৩ জন</option>
              <option>৪ জন</option>
              <option>৫ জন</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputSize" className="form-label">টি-শার্ট সাইজঃ-</label>
            <select id="inputSize" className="form-select">
              <option selected>পছন্দ করুণ....</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">মোবাইল</label>
            <input type="number" className="form-control" placeholder="আপনার মোবাইল নাম্বার দিন...." />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPaymentMethod" className="form-label">টাকা প্রদানের মাধ্যামঃ-</label>
            <select id="inputPaymentMethod" className="form-select">
              <option selected>পছন্দ করুণ....</option>
              <option>বিকাশ</option>
              <option>নগদ</option>
              <option>রকেট</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAmount" className="form-label">টাকার পরিমাণ-</label>
            <input type="text" className="form-control" id="inputAmount" value={paymentAmount} readOnly />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">মনে রাখুন</label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">রেজিস্ট্রেশন করুন</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
