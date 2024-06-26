export const getMarkdown = () => {
  const q1 = '`'
  const q3 = '```'
  const bq = '\\'

  return `${q3}js
  console.log('Hello, World!');
${q3}

${q3}css
  div.hello::before {
    content: 'world';
    display: block;
    width: 100vw;
    height: 100vh;
  }
${q3}

> [**GitHub**](https://github.com) says: *Hello*, ${q1}World!${q1}

---

#### Here is a formula:

$$
${bq}dfrac{${bq}partial}{${bq}partial t}(
	${bq}dfrac{${bq}partial ${bq}mathcal{L}}{${bq}partial ${bq}dot{q}_k}
) - ${bq}dfrac{${bq}partial ${bq}mathcal{L}}{${bq}partial q_k} = 0
$$

#### And here is a circuit:

${q3}tikz
${bq}usepackage{circuitikz}

${bq}begin{document}
	${bq}begin{circuitikz} ${bq}draw
		(0,0) to[battery] (0,4)
  		to[ammeter] (4,4) -- (4,0)
  		to[lamp] (0,0)
		;
	${bq}end{circuitikz}
${bq}end{document}
${q3}
`
}
