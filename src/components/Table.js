import React, { Component } from 'react'
import './Table.css'

const HORARIOS = [
  {  
    id:15,
    actividad:"Actividades",
  },
    {
        id:1,
        actividad:"Brazilian Jiu-Jitsu niños de 4 a 8 años",
        dia:"Lunes y miercoles",
        hora: "18:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:2,
        actividad:"Brazilian Jiu-Jitsu juveniles de 8 a 16 años",
        dia:"Lunes y miercoles",
        hora: "19:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:3,
        actividad:"Brazilian Jiu-Jitsu adultos",
        dia:"Lunes y miercoles",
        hora: "20:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:4,
        actividad:"Brazilian Jiu-Jitsu NoGi (sin kimono)",
        dia:"Martes y jueves",
        hora: "19:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:5,
        actividad:"Brazilian Jiu-Jitsu adultos",
        dia:"Martes y jueves",
        hora: "21:30 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:6,
        actividad:"Brazilian Jiu-Jitsu adultos",
        dia:"Viernes (Treino de lucha)",
        hora: "21:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:7,
        actividad:"Brazilian Jiu-Jitsu adultos",
        dia:"Lunes a jueves",
        hora: "08:30 hs",
        instructor:"Manuel Exposito y Lucas Murua"
    },
    {
        id:8,
        actividad:"Brazilian Jiu-Jitsu adultos",
        dia:"Lunes a jueves",
        hora: "15:00 hs",
        instructor:"Lucas Sabbadin"
    },
    {
        id:9,
        actividad:"Kickboxing",
        dia:"Lunes y miercoles",
        hora: "19:00 hs",
        instructor:"Manuel Exposito"
    },
    {
        id:10,
        actividad:"Kickboxing",
        dia:"Martes y jueves",
        hora: "20:30 hs",
        instructor:"Manuel Exposito"
    },
    {
        id:11,
        actividad:"Kickboxing",
        dia:"Viernes (sparring)",
        hora: "20:00 hs",
        instructor:"Manuel Exposito"
    },
    {
        id:12,
        actividad:"MMA",
        dia:"Lunes y miercoles",
        hora: "21:30 hs",
        instructor:"Lucas Murua y Manuel Exposito"
    },
    {
      id:13,
      actividad:"MMA",
      dia:"Viernes",
      hora: "20:00 hs",
      instructor:"Lucas Murua y Manuel Exposito"
    },
    {
      id:14,
      actividad:"Boxeo",
      dia:"Lunes y Miercoles",
      hora: "18:00 hs",
      instructor:"Lucas Murua"
    }
]


export default class Table extends Component {
  
   constructor(props){
     super(props)
     this.state={
       horarios:[],
       horario:''
     }
   }

   handleChange = event => {
      this.setState({ value: event.target.value });
   };

  handleChangeHorario = event => {
    this.setState({ horario: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

   componentDidMount() {
    const horarios = HORARIOS       
    this.setState({ horarios: horarios });
  }

  render() {
    const uniqueHorario = this.getUnique(this.state.horarios, "actividad");

    const horarios = this.state.horarios;
    const horario = this.state.horario;

    const filterDropdown = horarios.filter( result => result.actividad === horario );

    return (
      <div className="Table">
         <label id="label-table">Seleccioná una actividad</label>
         <select
              value={this.state.course}
              onChange={this.handleChangeHorario}
            >
              {uniqueHorario.map(horario => (
                  <option key={horario.id} value={horario.actividad}>{horario.actividad}</option>
              ))}
         </select>
        <table>
          <thead>
            <tr>
              <th>Días</th>
              <th>Hora</th>
              <th>Instructor/es</th>
            </tr>     
          </thead>
          <tbody>
              {filterDropdown.map(horario => (
                <tr key={horario.id}>
                  <td>{horario.dia}</td>
                  <td>{horario.hora}</td>
                  <td>{horario.instructor}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}


