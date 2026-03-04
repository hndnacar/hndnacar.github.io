const projectData = {
    tubitak: {
        title: "TÜBİTAK Destekli Burs Başvuru Uygulaması",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "Flutter,Dart,Firebase",
    },
    pedagog: {
        title: "Çocuk Resimlerinden Psikoloji Analizi",
        desc:"Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "Yolo,HTML,CSS,JS",
        
    },
    ajan: {
        title: "ajan",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "ONYX,N8N,HTML,CSS,JS",
    },
    saga: {
        title: "saga orkestrasyonu",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "Flutter,Node.js/Nest.js,Firebase",
    },
    veritabani: {
        title: "Veritabanı Projesi",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "SQL",
    },
    ml: {
        title: "Makine Öğrenmesi",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "Python",
    },
    gorüntüisleme: {
        title: "Görüntü İşleme",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "Matlab,Python",
    },
    bulut: {
        title: "Bulut Bilişim",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "AWS",
    },
    oyun: {
        title: "Unity Oyun Programlama",
        desc: "Projenin fotoğrafları daha sonra eklenecektir.Daha detay öğrnenmek istiyorsanız benimle iletişime geçin!",
        tech: "UNITY,C#",
        link: "https://play.unity.com/en/user/9db6c055-4f09-4f05-9c21-a49af182f53e"
    },    
};

function openProject(id) {
    const project = projectData[id];
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <div class="project-details">
            <h2>${project.title}</h2>
            <p><strong>Açıklama:</strong> ${project.desc}</p>
            <p><strong>Kullanılan Teknolojiler:</strong> ${project.tech}</p>
            ${project.link !== "#" ? `<a href="${project.link}" target="_blank" class="btn-main">Projeye Git</a>` : ""}
        </div>
    `;
    modal.style.display = "block";
}

function closeProject() {
    document.getElementById('project-modal').style.display = "none";
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}// 1. Sayfa kaydırdıkça bölümlerin yumuşakça gelmesi
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Modern Halka İmleç
const cursor = document.querySelector("#cursor-outline");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 15 + "px";
    cursor.style.top = e.clientY - 15 + "px";
});

// Linklere gelince imleç büyüsün
document.querySelectorAll('a, .card, .photo-frame').forEach(item => {
    item.addEventListener('mouseenter', () => { cursor.style.transform = "scale(1.8)"; cursor.style.background = "rgba(0, 209, 178, 0.1)"; });
    item.addEventListener('mouseleave', () => { cursor.style.transform = "scale(1)"; cursor.style.background = "transparent"; });
});

// 3. Giriş Sayfası Dinamik Yazı Efekti (Typer)
const typer = document.querySelector('.typer');
const words = typer.getAttribute('data-words').split(',');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typer.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typer.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Kelime bittiğinde bekleme süresi
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Efekti başlat

typeEffect();
