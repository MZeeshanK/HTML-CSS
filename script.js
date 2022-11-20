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
