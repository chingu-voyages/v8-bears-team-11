import React from "react";

const Requerimientos = () => {
  return (
    <div>
      <h1>Requerimientos</h1>
      <br />
      <p>Necesitamos que tenga los siguientes módulos</p>
      <p />
      <p>Pantalla de inicio para el administrador</p>
      <p>Crear cuenta de medico</p>
      <p>editar cuenta medico</p>
      <p />
      <p>Login de Medico</p>
      <p>Nombre y contraseña</p>
      <p />
      <p>Menu:</p>
      <p>PACIENTE NUEVO</p>
      <p>
        En este módulo se trata de dar de alta a los pacientes de primera vez
        con los siguientes datos que sería la ficha de identificación
      </p>
      <p>NOMBRE COMPLETO</p>
      <p>EDAD: SEXO: TELEFONO: CELULAR: REDES SOCIALES</p>
      <p>DIRECCIÓN COMPLETA </p>
      <p>Correo electrónico</p>
      <p />
      <p>PACIENTE SUBSECUENTE:</p>
      <p>
        En este módulo se trata de encontrar a todos los pacientes que ya
        hayamos dado de alta en el sistema y que podamos entrar a su expediente
        realizando un clip en algún botón y llenar su historia clínica con los
        siguientes datos
      </p>
      <p>ANTECEDENTES PERSONALES NO PATOLOGICOS (campo de texto)</p>
      <p>ANTECEDENTES PERSONALES PATOLOGICOS (campo de texto)</p>
      <p>EXPLORACION FISICA (campo de texto)</p>
      <p>NOTA MÉDICA (campo de texto)</p>
      <p>LABORATORIALES (campo de texto)</p>
      <p>ESTUDIOS COMPLEMENTARIOS (campo de texto)</p>
      <p>
        TRATAMIENTO (que cuando lleguemos al tratamiento tenga un enlace para
        realizar la receta personalizada y la podamos imprimir)
      </p>
      <p />
      <p>
        PROXIMA CITA (que cuando programemos la cita se enlace directamente con
        el módulo de calendario para que se estén programando los pacientes en
        automático)
      </p>
      <p>
        CITAS (este módulo tendrá que ser un especie de calendario donde muestre
        los pacientes citados por día, por semanas o por mes)
      </p>
      <p>
        DOCUMENTOS (se trata de que en este módulo podamos tener formatos que en
        ocasiones no solicita el cliente como por ejemplo receta médica,
        constancia médica, solicitud de laboratorio, solicitud estudios de
        gabinete etcétera)
      </p>
      <p>
        FARMACOS (se trata que en este módulo tenga toda la base de datos de los
        medicamentos que manejamos)
      </p>
      <p />
      <p />
      <p>
        Nota: el objetivo es que el sistema valla creando una base de datos de
        todo lo que se realiza para poder consultarla en el momento que queramos
        incluso que genere reportes tales de cuantos paciente miramos al mes u
        otros que sean necesario
      </p>
      <p>
        Nota: en el módulo de paciente subsecuente en cuanto a la historia
        clínica faltan datos que agregar pero la idea es esa más o menos
      </p>
      <p />
      <p>La aplicación debe usarse o instalarse en Windows y WEB.</p>
      <p>
        Si es en windows debe almacenar los datos de manera local para que en
        cuanto tenga Internet se actualice toda la información.
      </p>
      <p>Es necesario montarlo en el hosting del cliente.</p>
      <p />
    </div>
  );
};

export default Requerimientos;
