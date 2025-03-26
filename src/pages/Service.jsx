import React, { useRef, useState } from "react";
// import IMAGES from "../assets/images/images.js";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";

function Service() {

    const form = useRef();
    const [formValues, setFormValues] = useState({
      from_name: "",
      email: "",
      title: "",
      message: "",
      agree: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_sirqbe2", "template_cyrdajk", form.current, "Z3rsYZzAjoK00Izk5").then(
          (result) => {
            console.log(result.text);
            alert("메일이 성공적으로 전송되었습니다.");
            setFormValues({
              from_name: "",
              email: "",
              title: "",
              message: "",
              agree: "",
            });
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            alert("메일 전송에 실패했습니다.");
          }
        );
      };


      const renderLabel = (text, name) => (
        <label>
          {text}
          {!formValues[name] && <span className="required-mark">*</span>}
        </label>
      );

    return (
        <div className="service_sub">
            {/* <img src={IMAGES.room2} alt="" style={{width:'100%'}} /> */}
            <div className="mail">
                <div className="mailtitle">
                <h2>Service center</h2>
                <p>해태제과는 언제든 고객의 소리에 귀 기울이겠습니다!</p>
                </div>
                <div className="Econtainer">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="Econ1">
                    <div className="form-group ename">
                        {renderLabel("이름", "from_name")}
                        <input
                        type="text"
                        name="from_name"
                        value={formValues.from_name}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div className="form-group eemail">
                        {renderLabel("이메일", "email")}
                        <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    </div>
                    <div className="form-group etitle">
                    {renderLabel("제목", "title")}
                    <input
                        type="text"
                        name="title"
                        value={formValues.title}
                        onChange={handleInputChange}
                        required
                    />
                    </div>
                    <div className="form-group emessage">
                    {renderLabel("문의 내용", "message")}
                    <textarea
                        name="message"
                        rows="5"
                        value={formValues.message}
                        onChange={handleInputChange}
                        required></textarea>
                    </div>
                    <div className="EconBtm">
                    <div className="form-agree">
                        <input
                        type="checkbox"
                        className="submit-age"
                        value={formValues.agree}
                        onChange={handleInputChange}
                        style={{ width: "20px", height: "20px" }}
                        required
                        />
                        {renderLabel("개인정보 취급 방침 동의", "agree")}
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="submit-btn">
                        전송 <IoMdSend style={{ margin: "0 0 5px 5px", verticalAlign: "middle" }} />
                        </button>
                    </div>
            </div>
          </form>
        </div>
      </div>
        </div> 
          
    );
  }

  export default Service;