export default class TareaMantenimiento {
    constructor(equipo, decripcion, fechaVencimiento, terminada) {
        let _equipo = equipo
        let _descripcion = decripcion
        let _fechaVencimiento = fechaVencimiento
        let _terminada = terminada

        this.getEquipo = () => _equipo
        this.getDescripcion = () => _descripcion
        this.getFechaVencimiento = () => _fechaVencimiento
        this.isTerminada = () => _terminada

        this.setEquipo = (nuevoEquipo) => {
            _equipo = nuevoEquipo
        }
        this.setDescripcion = (nuevaDescripcion) => {
            _descripcion = nuevaDescripcion
        }
        this.setFechaVencimiento = (nuevaFechaVencimiento) => {
            _fechaVencimiento = nuevaFechaVencimiento
        }
        this.setTerminada = (isTerminada) => {
            _terminada = isTerminada
        }
    }
}