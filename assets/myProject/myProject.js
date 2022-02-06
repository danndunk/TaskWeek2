let projects = [];

function addProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-startdate").value;
  let endDate = document.getElementById("input-enddate").value;
  let description = document.getElementById("input-description").value;
  let projectImage = document.getElementById("input-project-image");

  projectImage = URL.createObjectURL(projectImage.files[0]);

  let duration = new Date(endDate) - new Date(startDate);

  let iconTech = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map((item) => item.value);

  let project = {
    projectName,
    startDate,
    endDate,
    duration,
    iconTech,
    description,
    projectImage,
  };

  projects.push(project);

  renderProject();
}

function renderProject() {
  let lengthProjects = projects.length;

  let firstProject = document.getElementById("first-project-list");
  firstProject.innerHTML = firstProjectContent();

  let projectGroup = document.getElementById("project-group");

  for (let i = 0; i < lengthProjects; i++) {
    let icon = projects[i].iconTech.map(
      (item) => `<img src="../image/icon/${item}">`
    );

    projectGroup.innerHTML += `<div class="project-item">
        <div class="item">
          <img src="${projects[i].projectImage}" alt="" />
          <a href="#container-detail-project" onclick="renderDetailProject()">
            <h3>
              ${projects[i].projectName} - ${getYear(projects[i].startDate)}
            </h3>
          </a>
          <p id="duration">durasi : ${getDurationTime(projects[i].duration)}</p>
          <p id="description">${projects[i].description}</p>
          <div class="logo-group" id="logo-group">
            ${icon}
          </div>
          <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      </div>
    `;
  }
}

function getDurationTime(different) {
  const miliseconds = 1000;
  const secondsInMinutes = 60;
  const minutesInHours = 60;
  const secondsInHours = secondsInMinutes * minutesInHours;
  const hoursInDay = 24;

  let timeDuration = new Date(different);

  let dayDuration = timeDuration / (miliseconds * secondsInHours * hoursInDay);

  if (dayDuration >= 30) {
    return Math.floor(dayDuration / 30) + " Months";
  } else {
    return Math.floor(dayDuration) + " Days";
  }
}

function getYear(first) {
  let year = new Date(first).getFullYear();
  return year;
}

function firstProjectContent() {
  return `
  <div class="project-list-items" id="project-list-items">
          <h1>MY PROJECT</h1>
          <div class="project-group" id="project-group">
            </div>
    </div>
   `;
}

// setInterval(function () {
//   renderProject();
// }, 1000);

function renderDetailProject() {
  document.getElementById("project-form").style.display = "none";
  document.getElementById("first-project-list").style.display = "none";
  let detailProject = document.getElementById("container-detail-project");

  detailProject.innerHTML = `
  <div class="container-detail-project" >
        <div class="container-project">
          <h1>Dumbways Web App</h1>
          <div class="content-project">
            <div class="info-project">
              <div class="image-project">
                <img
                  src="../image/tech picture/0_84615834-110235457206910-1026033211311915008-n_9232ce61.jpg"
                  alt=""
                />
              </div>
              <div class="detail-info-project">
                <div class="info">
                  <h3>Duration</h3>
                  <div class="detail">
                    <img src="../image/icon/calendar.png" alt="calender logo" />
                    <label>12 Jan 2021 - 11 Feb 2021</label>
                  </div>
                  <div class="detail">
                    <img src="../image/icon/clock.png" alt="clock logo" />
                    <label>1 Month</label>
                  </div>
                </div>
                <div>
                  <h3>Technologies</h3>
                  <div class="detail">
                    <div></div>
                    <img src="../image/icon/react.png" alt="" />
                    <label>React Js</label>
                    <img src="../image/icon/react.png" alt="" />
                    <label>React Js</label>
                  </div>
                  <div class="detail">
                    <img src="../image/icon/react.png" alt="" />
                    <label>React Js</label>

                    <img src="../image/icon/react.png" alt="" />
                    <label>React Js</label>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              sunt sequi voluptatem quos sapiente dignissimos alias totam
              placeat at quam blanditiis reiciendis, laudantium debitis deserunt
              consequuntur, mollitia labore velit. Eaque?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Provident consequatur quibusdam
              praesentium odit dignissimos temporibus eos iure dolor at unde,
              vitae illum saepe dolorum nobis assumenda laborum, explicabo
              architecto suscipit!Loremlorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repudiandae sint, ipsam deleniti
              consequatur, doloremque quas unde cupiditate incidunt officia
              sapiente animi eligendi eius nostrum provident illum natus,
              obcaecati fugiat expedita. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Assumenda est quod quo blanditiis ipsum
              mollitia, maxime commodi nobis ratione inventore qui accusantium.
              Sapiente sint optio unde repellendus. Facere, architecto aliquid?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem impedit esse unde ex alias facere, animi, odio
              similique dicta dolores vero veritatis reiciendis modi quis
              debitis labore culpa sapiente? Quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus tempora nam minus porro
              itaque eius facere non asperiores dolorem inventore molestiae
              officiis, natus impedit, excepturi accusantium. Nostrum molestias
              maxime amet! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cupiditate debitis magni nostrum accusantium ut saepe
              reiciendis consequatur dolorem fuga, sit minus rem dolore, dicta,
              recusandae animi ullam. Ullam, iusto numquam? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quos facilis quam eveniet
              amet. Eum nihil provident dolor! Nisi quam eos exercitationem
              explicabo fuga. Omnis recusandae enim vel soluta perferendis rem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio praesentium dolor cum dignissimos quibusdam possimus
              odio eaque aperiam, delectus dicta voluptatibus saepe facere
              dolorem unde consequatur, repellendus nisi pariatur?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Laudantium soluta a
              id inventore. Veniam consectetur, architecto magnam enim natus
              temporibus. Quos iste esse dolores odio deleniti eos reprehenderit
              sed eligendi.
            </p>
            <br />
          </div>
        </div>
      </div>
  `;
}
