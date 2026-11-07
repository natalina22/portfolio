
function setLanguage(lang) {

    const data = {

        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navJourney: "Journey",
            navContact: "Contact",

            heroTag: "FINAL-YEAR INFORMATICS ENGINEERING STUDENT",
            heroFocus: "Computer Vision • IoT • Networking • AI",
            heroDescription: "Passionate about Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, and Web Development.",
            cvBtn: "Download CV",

            aboutTitle: "About Me",
            aboutText: "Natalina Santa Lucia Sihite is a final-year Informatics Engineering student with interests in Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, and Web Development. Throughout her academic journey, she has developed projects ranging from web applications and networking simulations to embedded systems and IoT-based automation. Her undergraduate research focuses on developing a Smart Clothesline System using Convolutional Neural Networks (CNN) and ESP32-CAM technology for visual weather classification. She continuously improves her technical expertise through research, practical projects, and technology innovation.",

            statProjects: "Projects",
            statThesis: "Research Thesis",
            statArea: "Technical Areas",
            statSemester: "Semester",

            skillsTitle: "Technical Skills",
            projectsTitle: "Featured Projects",

            project1Title: "Smart Clothesline IoT",
            project1Desc: "CNN + ESP32-CAM based smart clothesline system for visual weather classification and automation.",

            project2Title: "Church Information System",
            project2Desc: "Web-based church information system for GPdI Tanah Tinggi.",
            project2Link: "Visit Website →",

            project3Title: "Automatic Door System",
            project3Desc: "Arduino-based automatic door using HC-SR04 ultrasonic sensor and SG90 servo motor.",

            project4Title: "Cisco Networking Project",
            project4Desc: "Implementation of VLAN, Routing and EIGRP simulation using Cisco Packet Tracer.",

            publicationStatus: "PUBLISHED JOURNAL • 2026",
            project5Title: "Development of an IoT-Based Visual Weather Classification System Using CNN",
            project5Desc: "Development of an IoT-based visual weather classification system using Convolutional Neural Network (CNN).",

            authorsLabel: "Authors:",
            publicationLabel: "Publication:",
            methodLabel: "Method:",
            dateLabel: "Publication Date:",

            journalView: "View Published Journal",
            journalPdf: "Read Full PDF",
            journalDoi: "View DOI",

            journeyTitle: "Academic Journey",
            journey1: "Started Informatics Engineering",
            journey2: "Automatic Door System Project",
            journey3: "Church Information System Development",
            journey4: "Smart Clothesline IoT Research",
            journey5: "Published Scientific Journal – TiKomSiN",

            researchTitle: "Research Interests",
            contactTitle: "Contact"
        },

        id: {
            navHome: "Beranda",
            navAbout: "Tentang",
            navSkills: "Keahlian",
            navProjects: "Proyek",
            navJourney: "Perjalanan",
            navContact: "Kontak",

            heroTag: "MAHASISWA TINGKAT AKHIR TEKNIK INFORMATIKA",
            heroFocus: "Computer Vision • IoT • Networking • AI",
            heroDescription: "Mahasiswa Teknik Informatika tingkat akhir yang memiliki minat pada Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, dan Web Development.",
            cvBtn: "Unduh CV",

            aboutTitle: "Tentang Saya",
            aboutText: "Saya adalah Natalina Santa Lucia Sihite, mahasiswa tingkat akhir Teknik Informatika yang memiliki minat pada Computer Vision, Internet of Things (IoT), Networking, Artificial Intelligence, dan Web Development. Selama masa perkuliahan, saya telah mengembangkan berbagai proyek mulai dari aplikasi web, simulasi jaringan, hingga sistem embedded dan otomasi berbasis IoT. Penelitian skripsi saya berfokus pada pengembangan sistem jemuran pintar menggunakan Convolutional Neural Network (CNN) dan ESP32-CAM untuk klasifikasi cuaca visual. Saya terus mengembangkan kemampuan teknis melalui penelitian, proyek nyata, dan inovasi teknologi.",

            statProjects: "Proyek",
            statThesis: "Penelitian Skripsi",
            statArea: "Bidang Teknis",
            statSemester: "Semester",

            skillsTitle: "Keahlian Teknis",
            projectsTitle: "Proyek Unggulan",

            project1Title: "Jemuran Pintar IoT",
            project1Desc: "Sistem jemuran pintar berbasis CNN dan ESP32-CAM untuk klasifikasi cuaca visual dan otomasi.",

            project2Title: "Sistem Informasi Gereja",
            project2Desc: "Sistem informasi berbasis web untuk GPdI Tanah Tinggi.",
            project2Link: "Kunjungi Situs Web →",

            project3Title: "Sistem Pintu Otomatis",
            project3Desc: "Pintu otomatis berbasis Arduino menggunakan sensor ultrasonik HC-SR04 dan motor servo SG90.",

            project4Title: "Proyek Jaringan Cisco",
            project4Desc: "Implementasi simulasi VLAN, Routing, dan EIGRP menggunakan Cisco Packet Tracer.",

            publicationStatus: "JURNAL TELAH TERBIT • 2026",
            project5Title: "Pengembangan Sistem Klasifikasi Cuaca Visual Berbasis IoT Menggunakan CNN",
            project5Desc: "Pengembangan sistem klasifikasi cuaca visual berbasis Internet of Things menggunakan metode Convolutional Neural Network (CNN).",

            authorsLabel: "Penulis:",
            publicationLabel: "Publikasi:",
            methodLabel: "Metode:",
            dateLabel: "Tanggal Publikasi:",

            journalView: "Lihat Jurnal Terbit",
            journalPdf: "Baca PDF Lengkap",
            journalDoi: "Lihat DOI",

            journeyTitle: "Perjalanan Akademik",
            journey1: "Memulai Kuliah Teknik Informatika",
            journey2: "Proyek Pintu Otomatis",
            journey3: "Pengembangan Sistem Informasi Gereja",
            journey4: "Penelitian Jemuran Pintar IoT",
            journey5: "Publikasi Jurnal Ilmiah – TiKomSiN",

            researchTitle: "Minat Penelitian",
            contactTitle: "Kontak"
        },

        zh: {
            navHome: "首页",
            navAbout: "关于我",
            navSkills: "技能",
            navProjects: "项目",
            navJourney: "学习经历",
            navContact: "联系方式",

            heroTag: "信息工程专业高年级学生",
            heroFocus: "计算机视觉 • 物联网 • 网络技术 • 人工智能",
            heroDescription: "专注于计算机视觉、物联网、网络技术、人工智能和网页开发。",
            cvBtn: "下载简历",

            aboutTitle: "关于我",
            aboutText: "我叫 Natalina Santa Lucia Sihite，是一名信息工程专业高年级学生。我对计算机视觉、物联网、网络技术、人工智能和网页开发非常感兴趣。在大学期间，我参与了多个项目，包括网页开发、网络模拟、嵌入式系统以及物联网自动化系统。目前我的毕业论文研究基于 CNN 与 ESP32-CAM 技术的智能晾衣系统，用于视觉天气分类。我持续通过研究与实践项目提升自己的技术能力。",

            statProjects: "项目",
            statThesis: "毕业论文",
            statArea: "技术领域",
            statSemester: "学期",

            skillsTitle: "专业技能",
            projectsTitle: "精选项目",

            project1Title: "智能物联网晾衣系统",
            project1Desc: "基于 CNN 和 ESP32-CAM 的智能晾衣系统，用于视觉天气分类和自动化。",

            project2Title: "教会信息系统",
            project2Desc: "GPdI Tanah Tinggi 教会网站信息系统。",
            project2Link: "访问网站 →",

            project3Title: "自动门系统",
            project3Desc: "使用 Arduino、HC-SR04 超声波传感器和 SG90 舵机的自动门系统。",

            project4Title: "Cisco 网络项目",
            project4Desc: "使用 Cisco Packet Tracer 实现 VLAN、路由和 EIGRP 网络模拟。",

            publicationStatus: "学术期刊已发表 • 2026",
            project5Title: "基于物联网与卷积神经网络的视觉天气分类系统开发",
            project5Desc: "采用卷积神经网络（CNN）开发基于物联网的视觉天气分类系统。",

            authorsLabel: "作者：",
            publicationLabel: "期刊：",
            methodLabel: "研究方法：",
            dateLabel: "发表日期：",

            journalView: "查看已发表论文",
            journalPdf: "阅读完整 PDF",
            journalDoi: "查看 DOI",

            journeyTitle: "学习经历",
            journey1: "开始信息工程专业学习",
            journey2: "自动门系统项目",
            journey3: "教会信息系统开发",
            journey4: "智能物联网晾衣系统研究",
            journey5: "发表学术论文 – TiKomSiN",

            researchTitle: "研究方向",
            contactTitle: "联系方式"
        }

    };

    const t = data[lang];

    if (!t) return;

    // Update page language
    document.documentElement.lang = lang;

    // Update ordinary HTML elements
    const elements = {
        "nav-home": t.navHome,
        "nav-about": t.navAbout,
        "nav-skills": t.navSkills,
        "nav-projects": t.navProjects,
        "nav-journey": t.navJourney,
        "nav-contact": t.navContact,

        "hero-tag": t.heroTag,
        "hero-focus": t.heroFocus,
        "hero-description": t.heroDescription,
        "cv-btn": t.cvBtn,

        "about-title": t.aboutTitle,
        "about-text": t.aboutText,

        "stat-projects": t.statProjects,
        "stat-thesis": t.statThesis,
        "stat-area": t.statArea,
        "stat-semester": t.statSemester,

        "skills-title": t.skillsTitle,
        "projects-title": t.projectsTitle,

        "project1-title": t.project1Title,
        "project1-desc": t.project1Desc,

        "project2-title": t.project2Title,
        "project2-desc": t.project2Desc,
        "project2-link": t.project2Link,

        "project3-title": t.project3Title,
        "project3-desc": t.project3Desc,

        "project4-title": t.project4Title,
        "project4-desc": t.project4Desc,

        "project5-title": t.project5Title,
        "project5-desc": t.project5Desc,

        "authors-label": t.authorsLabel,
        "publication-label": t.publicationLabel,
        "method-label": t.methodLabel,
        "date-label": t.dateLabel,

        "journal-view": t.journalView,
        "journal-pdf": t.journalPdf,
        "journal-doi": t.journalDoi,

        "journey-title": t.journeyTitle,
        "journey1": t.journey1,
        "journey2": t.journey2,
        "journey3": t.journey3,
        "journey4": t.journey4,
        "journey5": t.journey5,

        "research-title": t.researchTitle,
        "contact-title": t.contactTitle
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element && value !== undefined) {
            element.innerText = value;
        }
    });

    // Update publication status without removing its check icon
    const publicationStatus = document.getElementById("publication-status");

    if (publicationStatus) {
        const textNode = Array.from(publicationStatus.childNodes)
            .find(node => node.nodeType === Node.TEXT_NODE);

        if (textNode) {
            textNode.nodeValue = "\n" + t.publicationStatus + "\n";
        } else {
            publicationStatus.appendChild(
                document.createTextNode(t.publicationStatus)
            );
        }
    }

}

// Default language
setLanguage("en");
