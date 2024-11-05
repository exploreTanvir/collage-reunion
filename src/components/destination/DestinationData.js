import React, { useEffect, useState } from 'react';
import img1 from "../../assets/2019-05-02.jpg";
import imgs2 from "../../assets/anyrgb.com-removebg-preview.png";
import img2 from "../../assets/d.jpg";
import imgs1 from "../../assets/img1.png";
import "./destination.css";



const DestinationData = (props) => {
  const calculateTimeLeft = () => {
    const difference = new Date("2024-12-31T23:59:59") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [props.endDate]);

  return (
    <div className="container">
  
      <div className="firstDestination row align-items-center">
        <div className="destinationText col-lg-6 col-sm-12 mb-4">
          <h1 className="fw-bold text-center text-lg-start">সাফল্যের ২৫ বছর</h1>
          <p className="text-black-50 text-center text-lg-start">
            প্রত্যেক শিক্ষার্থীই আমাদের কলেজের গল্পের এক একটি অধ্যায়—রজত জয়ন্তী সেই গল্পকে উদযাপনের এক সুরম্য অধ্যায়
          </p>
          <h2 className="text-center text-lg-start">
            ২৫ বছরের এই পথচলা শুধু সময়ের হিসাব নয়; এটি হল আমাদের কলেজের গৌরবময় ইতিহাস, সাফল্য, এবং অবিচ্ছেদ্য বন্ধনের গল্প
          </h2>
          <div className="row justify-content-center gap-1 justify-content-lg-between py-3 text-center">
            <div className=" col-2 timeBox text-white fw-bold d-flex flex-column justify-content-center align-items-center">
              <h1>{timeLeft.days}</h1>
              <h4>দিন</h4>
            </div>
            <div className="col-3 timeBox text-white fw-bold d-flex flex-column justify-content-center align-items-center">
              <h1>{timeLeft.hours}</h1>
              <h4>ঘন্টা</h4>
            </div>
            <div className="col-3 timeBox text-white fw-bold d-flex flex-column justify-content-center align-items-center">
              <h1>{timeLeft.minutes}</h1>
              <h4>মিনিট</h4>
            </div>
            <div className="col-3 timeBox text-white fw-bold d-flex flex-column justify-content-center align-items-center">
              <h1>{timeLeft.seconds}</h1>
              <h4>সেকেন্ড</h4>
            </div>
          </div>
          <div className="text-center text-lg-start">
            <a href="https://forms.gle/kryM3nqursvDKhzB9" className="fs-5 sendBtn d-flex justify-content-center align-items-center gap-2 course">
              রেজিস্ট্রেশন করুন <i className="fa fa-arrow-right"></i>
            </a>
            
          </div>
        </div>
        <div className="destinationImg col-lg-6 col-sm-12 text-center">
          <img alt="Destination Img" className="animatedImg img-fluid" src={img1} />
          <img alt="Destination Img" className="animatedImgTwo img-fluid mt-3" src={img2} />
        </div>
      </div>


      <div className='row pb-4'>
        <div className='col-lg-6 mb-3'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228022.67740598132!2d89.0676212310791!3d23.52826444824166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fef859a081e5b7%3A0xdc789b4325dd456c!2sHazipur%20Sommiloni%20Collage!5e1!3m2!1sen!2sbd!4v1730787075269!5m2!1sen!2sbd" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <div className='col-lg-6'>
      <h4 >প্রিয় , <br/>প্রাক্তন ও বর্তমান শিক্ষার্থীবৃন্দ</h4>
      <p>
      আমাদের প্রিয় প্রতিষ্ঠান <b>হাজীপুর সম্মিলনী ডিগ্রি কলেজ</b> গর্বের সঙ্গে ২০২৪ সালে তার রজতজয়ন্তী উদযাপন করতে যাচ্ছে। এই ২৫ বছরের যাত্রায়, আমাদের কলেজ অসংখ্য শিক্ষার্থীকে শিক্ষার আলোয় আলোকিত করেছে, এবং এখন সেই অর্জনকে উদযাপন করার সময় এসেছে। এই মহতী আয়োজনকে স্মরণীয় করে তুলতে আমরা আপনাদের সবাইকে একত্রিত হওয়ার জন্য আমন্ত্রণ জানাচ্ছি।
      </p>
      <p>
      আপনারা আমাদের কলেজের অতীতের গর্ব এবং ভবিষ্যতের অনুপ্রেরণা। আপনারা যেখানেই থাকুন, আমরা আপনাদের সবার তথ্য সংগ্রহ করছি যেন এই রজতজয়ন্তী উপলক্ষে আপনাদের জন্য বিশেষ একটি অনুষ্ঠান আয়োজন করতে পারি। আমরা আপনাদের কলেজ জীবনের স্মৃতি, বর্তমান ঠিকানা, যোগাযোগের মাধ্যম, এবং আরও কিছু গুরুত্বপূর্ণ তথ্য সংগ্রহ করছি, যা আমাদের এই অনুষ্ঠানে আপনাদের সঠিকভাবে আমন্ত্রণ জানাতে সহায়ক হবে। 
      </p>
      <p>ফর্মটি পূরণ করার সময় আপনার সঠিক তথ্য প্রদান করার জন্য অনুরোধ করা হচ্ছে। এই রজতজয়ন্তী শুধুমাত্র আমাদের নয়, আপনাদের সবারও। আসুন, আমরা একত্রিত হয়ে আমাদের কলেজের এই বিশেষ দিনকে স্মরণীয় করে তুলি।</p>
      <p className='text-end'>ধন্যবাদান্তে,<br/>
      <b>হাজীপুর সম্মিলনী ডিগ্রি কলেজ পরিবার ।</b></p>
    </div>
      </div>

      <div className="img1 animated1"><img src={imgs1} alt="" /></div>
      <div className="img2 animated2"><img src={imgs2} alt="" /></div>
    </div>
  );
};

export default DestinationData;
