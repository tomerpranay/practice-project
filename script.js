var swiper = new Swiper(".mySwiper", {
    spaceBetween: 25,
    initialSlide: 1, 
    slidesPerView: 3.5,
    centeredSlides: true,
    freeMode: true,
    loop:true,
    mousewheel: {
        forceToAxis: true, // Enables horizontal scrolling only
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
function setActive(button) {
    let buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.add('show-add-skill')
    var popup = document.getElementById("myPopup-pop");
    popup.classList.add('popup')
  }
  function removepopup() {
    var popup = document.getElementById("myPopup-pop");
    popup.classList.remove('popup')
  }
  function showskills(){
      document.getElementById('Skills-screen').classList.remove('d-none')
      document.getElementById('home-screen').classList.add('d-none')
  }
  function showhome(){
      document.getElementById('Skills-screen').classList.add('d-none')
      document.getElementById('home-screen').classList.remove('d-none')
  }
  function myFunction() {
    document.getElementById("myPopup-pop").classList.add('popup');
}


document.getElementById('addSkillForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather form values
    console.log("hih")
    let domain = document.getElementById('domain').value;
    let skill1 = document.getElementById('skill1').value;
    let skill2 = document.getElementById('skill2').value;
    let skill3 = document.getElementById('skill3').value;
    let skill4 = document.getElementById('skill4').value;
    let skill5 = document.getElementById('skill5').value;
    let prof1 = document.getElementById('skillvalue1').value;
    let prof2 = document.getElementById('skillvalue2').value;
    let prof3 = document.getElementById('skillvalue3').value;
    let prof4 = document.getElementById('skillvalue4').value;
    let prof5 = document.getElementById('skillvalue5').value;

    // Validate form fields
    if (!domain) {
        alert("Domain is required");
        return;
    }
    let skills = [
        { skill: skill1, proficiency: prof1 },
        { skill: skill2, proficiency: prof2 },
        { skill: skill3, proficiency: prof3 },
        { skill: skill4, proficiency: prof4 },
        { skill: skill5, proficiency: prof5 }
    ].filter(skillObj => skillObj.skill && skillObj.proficiency);

    if (skills.length === 0) {
        alert("At least one skill is required");
        return;
    }

    // Add new skill section to the Skills list
let skillSection = document.createElement('div');
skillSection.classList.add('col-4', 'px-2'); // Adjusted for col-4
skillSection.innerHTML = `
    <div class="bg-white px-5 py-3 newskillheight">
        <div class="pb-3">${domain}</div> <!-- Domain name -->
        <div class="light-text-color">
            ${skills.map(skillObj => `
                <div>
                    <div class="d-flex justify-content-between">
                        <label for="frontend-${skillObj.skill}">${skillObj.skill}</label>
                        <div>${skillObj.proficiency}%</div>
                    </div>
                    <progress id="frontend-${skillObj.skill}" value="${skillObj.proficiency}" max="100"></progress>
                </div>
            `).join('')}
        </div>
    </div>
`;
    document.getElementById('skill-sets').appendChild(skillSection);

    // Reset form and close the popup
    document.getElementById('addSkillForm').reset();
    removepopup();
});