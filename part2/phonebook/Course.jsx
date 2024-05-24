
const Header = (props) => {
    return <h1>{props.course}</h1>
  }
  
  const Total = (props) => {
    return <p>Number of exercises {props.course}</p>
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
   
  const Course = (props) => {
    return (
      <div>
        <Header course = {props.course.name}></Header>
        <ul>
            {props.course.parts.map(content => 
              <ul key={content.id}>
                <Part part = {content.name} exercises = {content.exercises}></Part>
                
              </ul>
            )}
          </ul>
        <Total course = {props.course.parts.reduce((accumulator ,item) => {
      return accumulator += item.exercises;
    }, 0)}></Total>
      </div>
    )
  }
  
  export default Course