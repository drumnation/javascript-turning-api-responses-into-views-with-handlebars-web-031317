function getRepositories() {
  const req = new XMLHttpRequest() // initializing a new XMLHttpRequest()
  req.addEventListener("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos') // GET request to the URI for the list user repositories API
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  // parse the response string into proper objects

  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)

  // crappier way

  // const repoList = '<ul>' + repos.map(r => {
  //  return (`
  //         <li>
  //           <h2><a href="${r.html_url}">${r.name}</a></h2>
  //           <p>Watchers: ${r.watchers_count}</p>
  //           <p>Forks: ${r.forks_count}</p>
  //           <p>Issues: ${r.open_issues_count}</p>
  //         </li>`
  //         )
  // }).join('') + "</ul>"

  // building an unordered list by using map to create <li></li> nodes for each object in repos

  document.getElementById("repositories").innerHTML = repoList
}

document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});
