const section = document.querySelector('#projects');

const fetchProjects = async () => {
  // const res = await fetch(
  //   `https://api.github.com/repos/MZeeshanK/HTML_&_CSS/contents/projects`
  // );
  const res = await fetch(
    `https://api.github.com/repos/MZeeshanK/portfolio/contents/`
  );

  const response = await res.json();

  console.log(response);

  let projects;

  response.map((res) => {
    const project = document.createElement('div');

    project.classList.add('project-container');

    project.innerHTML = `
    <h3>${res.name}</h3>
    <a href='projects/Dropdown/index.html'><i class="fa-solid fa-square-arrow-up-right"></i></a>
    `;

    section.appendChild(project);
  });
};

fetchProjects();
