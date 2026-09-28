function setLanguage(lang){

const data = {

en:{

navHome:"Home",
navAbout:"About",
navSkills:"Skills",
navProjects:"Projects",
navJourney:"Journey",
navContact:"Contact",

heroTag:"FINAL-YEAR INFORMATICS ENGINEERING STUDENT",

heroFocus:"Computer Vision • IoT • Networking • AI",

heroDescription:
"Passionate about Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, and Web Development.",

cvBtn:"Download CV",

aboutTitle:"About Me",

aboutText:
"Natalina Santa Lucia Sihite is a final-year Informatics Engineering student with interests in Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, and Web Development. Throughout her academic journey, she has developed projects ranging from web applications and networking simulations to embedded systems and IoT-based automation. Her current undergraduate thesis focuses on developing a Smart Clothesline Automation System using Convolutional Neural Networks (CNN) and ESP32-CAM technology for automatic rain detection and protection. She continuously improves her technical expertise through research, practical projects, and technology innovation.",

statProjects:"Projects",
statThesis:"Research Thesis",
statArea:"Technical Areas",
statSemester:"Semester",

skillsTitle:"Technical Skills",

projectsTitle:"Featured Projects",

project1Title:"Smart Clothesline IoT",
project1Desc:"CNN + ESP32-CAM based automatic clothesline system for rain detection and automation.",

project2Title:"Church Information System",
project2Desc:"Web-based church information system for GPdI Tanah Tinggi.",

project3Title:"Automatic Door System",
project3Desc:"Arduino-based automatic door using HC-SR04 ultrasonic sensor and SG90 servo motor.",

project4Title:"Cisco Networking Project",
project4Desc:"Implementation of VLAN, Routing and EIGRP simulation using Cisco Packet Tracer.",

journeyTitle:"Academic Journey",

journey1:"Started Informatics Engineering",
journey2:"Automatic Door System Project",
journey3:"Church Information System Development",
journey4:"Smart Clothesline IoT Thesis",

researchTitle:"Research Interests",

contactTitle:"Contact"

},

id:{

navHome:"Beranda",
navAbout:"Tentang",
navSkills:"Keahlian",
navProjects:"Proyek",
navJourney:"Perjalanan",
navContact:"Kontak",

heroTag:"MAHASISWA TINGKAT AKHIR TEKNIK INFORMATIKA",

heroFocus:"Computer Vision • IoT • Networking • AI",

heroDescription:
"Mahasiswa Teknik Informatika tingkat akhir yang berfokus pada Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, dan Web Development.",

cvBtn:"Unduh CV",

aboutTitle:"Tentang Saya",

aboutText:
"Saya adalah Natalina Santa Lucia Sihite, mahasiswa tingkat akhir Teknik Informatika yang memiliki minat pada Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, dan Web Development. Selama masa perkuliahan saya telah mengembangkan berbagai proyek mulai dari aplikasi web, simulasi jaringan, hingga sistem IoT dan otomasi. Skripsi saya berfokus pada pengembangan sistem jemuran otomatis berbasis Convolutional Neural Network (CNN) dan ESP32-CAM untuk mendeteksi kondisi hujan dan melakukan perlindungan pakaian secara otomatis. Saya terus mengembangkan kemampuan teknis melalui penelitian, proyek nyata, dan inovasi teknologi.",

statProjects:"Proyek",
statThesis:"Skripsi",
statArea:"Bidang Teknis",
statSemester:"Semester",

skillsTitle:"Keahlian Teknis",

projectsTitle:"Proyek Unggulan",

project1Title:"Jemuran Otomatis IoT",
project1Desc:"Sistem jemuran otomatis berbasis CNN dan ESP32-CAM untuk mendeteksi hujan.",

project2Title:"Sistem Informasi Gereja",
project2Desc:"Sistem informasi berbasis web untuk GPdI Tanah Tinggi.",

project3Title:"Sistem Pintu Otomatis",
project3Desc:"Pintu otomatis berbasis Arduino menggunakan sensor HC-SR04 dan servo SG90.",

project4Title:"Proyek Jaringan Cisco",
project4Desc:"Implementasi VLAN, Routing dan EIGRP menggunakan Cisco Packet Tracer.",

journeyTitle:"Perjalanan Akademik",

journey1:"Memulai Kuliah Teknik Informatika",
journey2:"Proyek Pintu Otomatis",
journey3:"Pengembangan Sistem Informasi Gereja",
journey4:"Skripsi Jemuran Otomatis IoT",

researchTitle:"Minat Penelitian",

contactTitle:"Kontak"

},

zh:{

navHome:"首页",
navAbout:"关于我",
navSkills:"技能",
navProjects:"项目",
navJourney:"学习经历",
navContact:"联系方式",

heroTag:"信息工程专业应届毕业生",

heroFocus:"Computer Vision • IoT • Networking • AI",

heroDescription:
"专注于计算机视觉、物联网、网络技术、人工智能和网页开发。",

cvBtn:"下载简历",

aboutTitle:"关于我",

aboutText:
"我叫 Natalina Santa Lucia Sihite，是一名信息工程专业应届毕业生。我对计算机视觉、物联网、人工智能、网络技术和网页开发非常感兴趣。在大学期间，我参与了多个项目，包括网页开发、网络模拟、嵌入式系统以及物联网自动化系统。目前我的毕业论文研究基于 CNN 与 ESP32-CAM 的智能晾衣系统，用于自动检测降雨情况并实现自动保护功能。我持续通过研究与实践项目提升自己的技术能力。",

statProjects:"项目",
statThesis:"毕业论文",
statArea:"技术领域",
statSemester:"学期",

skillsTitle:"技术技能",

projectsTitle:"精选项目",

project1Title:"智能晾衣系统",
project1Desc:"基于 CNN 与 ESP32-CAM 的自动晾衣系统。",

project2Title:"教会信息系统",
project2Desc:"GPdI Tanah Tinggi 教会网页信息系统。",

project3Title:"自动门系统",
project3Desc:"基于 Arduino、HC-SR04 与 SG90 的自动门系统。",

project4Title:"Cisco 网络项目",
project4Desc:"使用 Cisco Packet Tracer 实现 VLAN、Routing 与 EIGRP。",

journeyTitle:"学习经历",

journey1:"开始信息工程学习",
journey2:"自动门项目",
journey3:"教会信息系统开发",
journey4:"智能晾衣系统毕业论文",

researchTitle:"研究方向",

contactTitle:"联系方式"

}

};

const t = data[lang];

document.getElementById("nav-home").innerText = t.navHome;
document.getElementById("nav-about").innerText = t.navAbout;
document.getElementById("nav-skills").innerText = t.navSkills;
document.getElementById("nav-projects").innerText = t.navProjects;
document.getElementById("nav-journey").innerText = t.navJourney;
document.getElementById("nav-contact").innerText = t.navContact;

document.getElementById("hero-tag").innerText = t.heroTag;
document.getElementById("hero-focus").innerText = t.heroFocus;
document.getElementById("hero-description").innerText = t.heroDescription;

document.getElementById("cv-btn").innerText = t.cvBtn;

document.getElementById("about-title").innerText = t.aboutTitle;
document.getElementById("about-text").innerText = t.aboutText;

document.getElementById("stat-projects").innerText = t.statProjects;
document.getElementById("stat-thesis").innerText = t.statThesis;
document.getElementById("stat-area").innerText = t.statArea;
document.getElementById("stat-semester").innerText = t.statSemester;

document.getElementById("skills-title").innerText = t.skillsTitle;

document.getElementById("projects-title").innerText = t.projectsTitle;

document.getElementById("project1-title").innerText = t.project1Title;
document.getElementById("project1-desc").innerText = t.project1Desc;

document.getElementById("project2-title").innerText = t.project2Title;
document.getElementById("project2-desc").innerText = t.project2Desc;

document.getElementById("project3-title").innerText = t.project3Title;
document.getElementById("project3-desc").innerText = t.project3Desc;

document.getElementById("project4-title").innerText = t.project4Title;
document.getElementById("project4-desc").innerText = t.project4Desc;

document.getElementById("journey-title").innerText = t.journeyTitle;

document.getElementById("journey1").innerText = t.journey1;
document.getElementById("journey2").innerText = t.journey2;
document.getElementById("journey3").innerText = t.journey3;
document.getElementById("journey4").innerText = t.journey4;

document.getElementById("research-title").innerText = t.researchTitle;

document.getElementById("contact-title").innerText = t.contactTitle;

}