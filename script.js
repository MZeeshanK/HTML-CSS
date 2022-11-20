const section = document.querySelector('#projects');

const fetchProjects = async () => {
  const res = await fetch(
    `https://api.github.com/repos/MZeeshanK/HTML-CSS/contents/projects`,
    {
      headers: {
        Authorization: 'token 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',
      },
    }
  );

  const response = await res.json();

  console.log(response);

  response.map((res) => {
    const project = document.createElement('div');

    project.classList.add('project-container');

    project.innerHTML = `
    <a href='projects/${res.name}/index.html'>
    <h3>${res.name}</h3>
    <i class="fa-solid fa-square-arrow-up-right"></i>
    </a>
    `;

    section.appendChild(project);
  });
};

fetchProjects();
