import React, { useState, useRef } from "react";
import { SiAltiumdesigner } from "react-icons/si";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiSeoLine } from "react-icons/ri";
import { DiDigitalOcean } from "react-icons/di";
import { IoLogoDesignernews } from "react-icons/io";
import { FaWordpressSimple } from "react-icons/fa";
import { LiaMobileAltSolid } from "react-icons/lia";
import { SiWebmoney } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import digitalMarketing from "../../../assets/digital-marketing.webp";
import webDesign from "../../../assets/web-design.jpg";
import seo from "../../../assets/seo.webp";
import graphicDesign from "../../../assets/graphic-design.webp";
import wordpress from "../../../assets/wordpress.png";
import mobileDevelopment from "../../../assets/mobile-development.png";
import webhosting from "../../../assets/web-hosting.jpg";
import branding from "../../../assets/branding.png";
import "./styles.css";

function Services({ opacity }) {
    const [imageIndex, setImageIndex] = useState(null);
    const cardRef = useRef();

    const services = [
        {
            id: 0,
            name: "Web Design",
            icon: <SiAltiumdesigner size={24} />,
            image: webDesign,
            description:
                "Unlock the power of exceptional web design with our services. Elevate your online presence with eye-catching visuals, user-friendly interfaces, and cutting-edge technology. Our team of skilled designers is dedicated to crafting websites that not only look stunning but also deliver results. Whether you're launching a new project or revamping an existing site, partner with us to create a digital masterpiece that captures your brand's essence and engages your audience.",
        },
        {
            id: 1,
            name: "Search Engine Optimization",
            icon: <RiSeoLine size={24} />,
            image: seo,
            description:
                "Elevate your online visibility and drive organic traffic with our SEO optimization services. We specialize in enhancing your website's search engine ranking, implementing strategic keywords, and optimizing content to boost your online presence. Our SEO experts work tirelessly to ensure that your brand stands out in search results, ultimately increasing your website's performance and attracting more potential customers to your digital doorstep.",
        },
        {
            id: 2,
            name: "Digital Marketing",
            icon: <DiDigitalOcean size={24} />,
            image: digitalMarketing,
            description:
                "Unlock the potential of your brand with our digital marketing expertise. We craft tailored strategies that connect you with your target audience across various digital platforms. From social media engagement to data-driven advertising campaigns, we drive engagement, boost conversions, and maximize ROI. Let us be your digital partner in creating impactful campaigns that take your brand to the forefront of the digital landscape.",
        },
        {
            id: 3,
            name: "Graphic Design",
            icon: <IoLogoDesignernews size={24} />,
            image: graphicDesign,
            description:
                "Unleash the power of creativity with our graphic design services. Whether you need a distinctive logo, eye-catching T-shirt design, captivating banners, or striking business cards, we bring your vision to life. Our talented designers specialize in crafting visual elements that resonate with your brand and audience. Elevate your brand's image and make a lasting impression with our custom graphic design solutions",
        },
        {
            id: 4,
            name: "Content Managment Systems",
            icon: <FaWordpressSimple size={24} />,
            image: wordpress,
            description:
                "Empower your digital presence with our CMS development expertise. We tailor user-friendly, custom CMS solutions that cater to your unique requirements. From websites and blogs to e-commerce platforms, our scalable and intuitive CMS platforms simplify content creation, management, and publishing, ensuring you have complete control over your digital assets. Revolutionize your online presence with our CMS development services.",
        },
        {
            id: 5,
            name: "Mobile App Development",
            icon: <LiaMobileAltSolid size={24} />,
            image: mobileDevelopment,
            description:
                "Unlock the potential of your business with our Mobile App Development services. Our expert team specializes in crafting user-friendly and feature-rich mobile applications tailored to your unique needs. Whether you're looking to engage customers, streamline operations, or create innovative solutions, we're here to transform your ideas into exceptional mobile experiences. Elevate your brand, enhance user engagement, and stay ahead in the mobile-driven world with our custom app development solutions.",
        },
        {
            id: 6,
            name: "Web Hosting and Maintenance",
            icon: <SiWebmoney size={24} />,
            image: webhosting,
            description:
                "At Quirk & Quill Studios, we bring you top-notch hosting solutions backed by Bluehost's proven infrastructure. Experience seamless website performance, 24/7 expert support, and advanced security features, all powered by Bluehost. With us, your online presence is in safe hands, ensuring your website runs smoothly while you focus on growing your business.",
        },
        {
            id: 7,
            name: "Branding and Identity Design",
            icon: <CgIfDesign size={24} />,
            image: branding,
            description:
                "Our expert designers are skilled in crafting memorable logos, defining brand guidelines, and creating consistent visual elements that resonate with your audience. Elevate your brand's recognition and establish a strong, cohesive identity that leaves a lasting imprint across all your marketing materials.",
        },
    ];

    const retrieveIndex = (index) => {
        if (imageIndex === null) {
            setImageIndex(index);
        } else if (imageIndex === index) {
            setImageIndex(null);
        } else {
            setImageIndex(index);
        }
    };

    return (
        <div
            className={`Services ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"
                }`}
        >
            <div
                className={`services-wrapper ${opacity ? "opacity-0 d-none" : "opacity-1 d-initial"
                    }`}
            >
                <div className="services-title">
                    <h1>Our Services</h1>
                    <p>
                        Our services span a wide spectrum of digital needs. From web design
                        that captivates, SEO optimization that ranks, to digital marketing
                        that engages, and design that wows. We're your all-in-one solution
                        for digital success
                    </p>
                </div>
                <div className="services-list">
                    {services.map((service, index) => (
                        <div className="service-card">
                            <button onClick={() => retrieveIndex(index)}>
                                <div className="button-wrapper">
                                    {service.icon}
                                    {service.name}
                                </div>
                                {imageIndex === index ? (
                                    <AiOutlineMinus size={24} />
                                ) : (
                                    <AiOutlinePlus size={24} />
                                )}
                            </button>
                            <div
                                className={`overlay ${imageIndex === index ? "h-400" : "h-0"}`}
                                style={{ width: cardRef.current?.offsetWidth }}
                            ></div>
                            <div
                                style={{
                                    backgroundImage: `url(${services[imageIndex]?.image})`,
                                }}
                                className={`service-image ${imageIndex === index ? "h-400 w-100" : "h-0"
                                    }`}
                                ref={cardRef}
                            >
                                <h4>{service.name}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="tel:+19095015252"><button className="call-now">Learn More</button></a>
            </div>
        </div>
    );
}

export default Services;
