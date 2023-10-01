import TareaMantenimiento from "./TareaMantenimiento.mjs";

export default class ControlTareas {
    constructor() {
        const tareas = []

        this.getTareas = () => tareas

        this.agregarTarea = (...nuevaTarea) => {
            nuevaTarea.forEach(tarea => {
                if (tarea instanceof TareaMantenimiento && !tareas.includes(tarea)) {
                    tareas.push(tarea)
                } else {
                    throw Error('Ocurrió un error al agregar una tarea, compruebe que sea única y que los datos son correctos')
                }
            })
        }

        this.eliminarTarea = (tarea) => {
            let index = tareas.indexOf(tarea)
            if (index > -1) {
                tareas.splice(index, 1)
            } else {
                throw Error('Tarea no encontrada')
            }
        }

        this.editarTarea = (tarea, nuevosDatos) => {
            let index = tareas.indexOf(tarea)

            if (index > -1) {
                let tareaEditar = tareas.at(index)

                if (nuevosDatos.equipo) {
                    tareaEditar.setEquipo(nuevosDatos.equipo)
                }
                if (nuevosDatos.descripcion) {
                    tareaEditar.setDescripcion(nuevosDatos.descripcion)
                }
                if (nuevosDatos.fechaVencimiento) {
                    tareaEditar.setFechaVencimiento(nuevosDatos.fechaVencimiento)
                }
            } else {
                throw Error('Tarea no encontrada')
            }
        }

        this.tareasPendientesEquipo = () => {
            const tareasPendienteas = {}

            for (const tarea of tareas) {
                let equipo = tarea.getEquipo()
                if (!tarea.isTerminada() && tarea.getFechaVencimiento() > Date.now()) {
                    if (!tareasPendienteas[equipo]) {
                        tareasPendienteas[equipo] = []
                    }
                    tareasPendienteas[equipo].push(tarea)
                }
            }
            return tareasPendienteas
        }
    }
}
