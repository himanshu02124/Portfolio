/* SKILLS ACCORDION LOGIC */
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  let itemclass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close';
  }
  if (itemclass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_active');
    });
    target.classList.add('qualification_active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active');
    });
    tab.classList.add('qualification_active');
  });
});
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

/* SUGGESTIONS:
1. Make sure image assets like 'profile-pic.png', 'sports.PNG', etc., exist in your project folder.
2. Replace placeholder links (e.g., `href="#"`) with actual sections or URLs. Use `id` or `class` for smooth scroll.
3. Update LinkedIn, GitHub, and YouTube URLs with your real social links.
4. The 'Download CV' button should point to a real `.pdf` file of your resume (e.g., href="Himanshu_CV.pdf").
5. Consider adding form validation or submit logic to the contact form.
6. For better accessibility, label your icons with `aria-label` or add `title` attributes.
*/
