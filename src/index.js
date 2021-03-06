data = [
  ["Marca","Numero"],
  ["Audi", 3],
  ["BMW", 2],
  ["Mercedes", 1],
  ["Opel", 1],
  ["Volkswagen", 8],
  ["Nissan", 12]
];
chartType = "PieChart";
containerId = "chart1";
options = {"title":"Carros en la calle"};

datos = {
  BD: ['Servidor','Objeto'],
  ALUMNO: ['CICLO','CURP','NOMBRE','PRIMER_APELLIDO','SEGUNDO_APELLIDO',
          'NIVEL','GRADO','GRUPO','GENERO', 'CORREO_GOOGLE','CORREO_OTRO',
          'CALLE','NUMERO','NUMERO_INTERNO','ENTIDAD','MUNICIPO','COLONIA','CODIGO_POSTAL', 'TELEFONO',
          'TELEFONO_ALTERNO','CORREO_ELECTRONICO',	'CORREO_ELECTRONICO_ALTERNO'],
  TUTOR: ['NOMBRE_MADRE','PRIMER_APELLIDO_MADRE','SEGUNDO_APELLIDO_MADRE',
          'NOMBRE_PADRE','PRIMER_APELLIDO_PADRE','SEGUNDO_APELLIDO_PADRE','TUTOR_CURP', 'PARENTESCO'],
  ESCUELA: ['CCT','DIRECCION', 'NOMBRE_ESCUELA', 'TURNO', 'COLONIA_CCT', 'ALCALDIA_CCT', 'CP_CCT', 'UNIDAD_TERRITORIAL'],
  INTERNO: ['ID', 'USUARIO_CREACION', 'FECHA_CREACION', 'USUARIO_MODIFICACION', 'FECHA_MODIFICACION']
}

servers = {
  DBU_MATRICULA: {IP: '2.2', SCHEMA: 'procesa_informacion',
      TABLAS: {
        PREINSCRIPCIONES_DATOS: {
          CURP: ['VARCHAR2(18 BYTE)','CURP'],
          PRIMER_APELLIDO: ['VARCHAR2(64 BYTE)','PRIMERAPELLIDO'],
          SEGUNDO_APELLIDO: ['VARCHAR2(64 BYTE)','SEGUNDOAPELLIDO'],
          NOMBRE: ['VARCHAR2(64 BYTE)','NOMBRES'],
          CORREO_ELECTRONICO: ['VARCHAR2(128 BYTE)','EMAIL'],
          TELEFONO: ['VARCHAR2(28 BYTE)','TELEFONO'],
          CALLE: ['VARCHAR2(128 BYTE)','DOMICILIO_CALLE'],
          NUMERO: ['VARCHAR2(64 BYTE)','DOMICILIO_NUMERO'],
          ENTIDAD: ['VARCHAR2(64 BYTE)','DOMICILIO_ENTIDAD'],
          MUNICIPO: ['VARCHAR2(128 BYTE)','DOMICILIO_MUNICIPIO'],
          COLONIA: ['VARCHAR2(128 BYTE)','DOMICILIO_COLONIA'],
          CODIGO_POSTAL: ['VARCHAR2(5 BYTE)','DOMICILIO_CODIGO_POSTAL'],
          ANIO_PREINSCRIPCION: ['NUMBER(4,0)','ANIO_PREINSCRIPCION'],
          NIVEL: ['VARCHAR2(32 BYTE)','NIVEL_EDUCATIVO'],
          GRADO: ['NUMBER(1,0)','GRADO'],
          TELEFONO: ['VARCHAR2(14 BYTE)','TELEFONO_CELULAR'],
          TELEFONO_ALTERNO: ['VARCHAR2(15 BYTE)','TEL_OTRO'],
          CORREO_ELECTRONICO_ALTERNO: ['VARCHAR2(128 BYTE)','EMAIL_ADICIONAL'],
          NOMBRE_MADRE: ['VARCHAR2(192 BYTE)','MADRE_NOMBRE'],
          PRIMER_APELLIDO_MADRE: ['VARCHAR2(64 BYTE)','MADRE_PRIMERAPELLIDO'],
          SEGUNDO_APELLIDO_MADRE: ['VARCHAR2(64 BYTE)','MADRE_SEGUNDOAPELLIDO'],
          NOMBRE_PADRE: ['VARCHAR2(192 BYTE)','PADRE_NOMBRE'],
          PRIMER_APELLIDO_PADRE: ['VARCHAR2(64 BYTE)','PADRE_PRIMERAPELLIDO'],
          SEGUNDO_APELLIDO_PADRE: ['VARCHAR2(64 BYTE)','PADRE_SEGUNDOAPELLIDO'],
          USUARIO_CREACION: ['VARCHAR2(32 BYTE)','USUARIO_CREACION'],
          FECHA_CREACION: ['DATE','FECHA_CREACION'],
          USUARIO_MODIFICACION: ['VARCHAR2(32 BYTE)','USUARIO_ULTIMA_MODIFICACION'],
          FECHA_MODIFICACION: ['DATE','FECHA_ULTIMA_MODIFICACION']},
        ALUMNOS_CORREOS : {
          'NOMBRE': ['VARCHAR2(60 BYTE)','S_NOMBRE'],
          'PRIMER_APELLIDO': ['VARCHAR2(120 BYTE)','S_APELLIDOS'],
          'CURP': ['VARCHAR2(18 BYTE)','S_CURP'],
          'CCT': ['VARCHAR2(10 BYTE)','S_CCT'],
          'DIRECCION': ['VARCHAR2(32 BYTE)','DIR_GENERAL'],
          'GRADO': ['NUMBER(1,0)','GRADO'],
          'GRUPO': ['VARCHAR2(1 BYTE)','GRUPO'],
          'NIVEL': ['VARCHAR2(32 BYTE)','NIVEL_ESCOLAR'],
          'CORREO_GOOGLE': ['VARCHAR2(128 BYTE)','CORREO_GOOGLE'],
          'CORREO_OTRO': ['VARCHAR2(128 BYTE)','CORREO_MICROSOFT'],
          'USUARIO_CREACION': ['VARCHAR2(32 BYTE)','USUARIO_CREACION'],
          'FECHA_CREACION': ['DATE','FECHA_CREACION'],
          'USUARIO_MODIFICACION': ['VARCHAR2(32 BYTE)','USUARIO_MODIFICACION'],
          'FECHA_MODIFICACION': ['DATE','FECHA_MODIFICACION']},
        SOLICITUDES_INSCRIPCION_DATOS: {
          ID: ['NUMBER','ID'],
          CICLO: ['CHAR(9 BYTE)','CICLO_ESCOLAR'],
          CURP: ['VARCHAR2(18 BYTE)','CURP'],
          NOMBRE: ['VARCHAR2(64 BYTE)','NOMBRES'],
          PRIMER_APELLIDO: ['VARCHAR2(64 BYTE)','PRIMERAPELLIDO'],
          SEGUNDO_APELLIDO: ['VARCHAR2(64 BYTE)','SEGUNDOAPELLIDO'],
          NOMBRE_MADRE: ['VARCHAR2(64 BYTE)','TUTOR_NOMBRES'],
          PRIMER_APELLIDO_MADRE: ['VARCHAR2(64 BYTE)','TUTOR_PRIMERAPELLIDO'],
          SEGUNDO_APELLIDO_MADRE: ['VARCHAR2(64 BYTE)','TUTOR_SEGUNDOAPELLIDO'],
          CORREO_ELECTRONICO: ['VARCHAR2(256 BYTE)','EMAIL'],
          TELEFONO: ['VARCHAR2(10 BYTE)','TELEFONO_CONTACTO'],
          FECHA_CREACION: ['DATE','FECHA_CREACION'],
          USUARIO_CREACION: ['VARCHAR2(32 BYTE)','USUARIO_CREACION']},
        V_ALUMNOS_INSCRITOS : {
          'ADEUDO': ['NUMBER','ADEUDO'],
          'ID': ['NUMBER(19)','ALUMNO_ID'],
          'CCT': ['VARCHAR2(255 CHAR)','CCT'],
          'CURP': ['VARCHAR2(255 CHAR)','CURP'],
          'ENTIDAD_NACIMIENTO': ['VARCHAR2(255 CHAR)','ENTIDAD_NACIMIENTO'],
          'ENTIDAD_NACIMIENTO_ABREVIACION': ['VARCHAR2(255)','ENTIDAD_NACIMIENTO_ABREVIACION'],
          'ETNIA': ['VARCHAR2(255)','ETNIA'],
          'FECHA_NACIMIENTO': ['DATE','FECHA_NACIMIENTO'],
          'GENERO': ['VARCHAR2(1)','GENERO'],
          'GRADO': ['NUMBER(10)','GRADO'],
          'GRUPO': ['VARCHAR2(255 CHAR)','GRUPO'],
          'GRUPO_ID': ['NUMBER(19)','GRUPO_ID'],
          'IRREGULAR_1GDO': ['NUMBER(2)','IRREGULAR_1GDO'],
          'IRREGULAR_2GDO': ['NUMBER(2)','IRREGULAR_2GDO'],
          'IRREGULAR_3GDO': ['NUMBER(2)','IRREGULAR_3GDO'],
          'NIVEL': ['VARCHAR2(264 CHAR)','NIVEL_EDUCATIVO'],
          'NIVEL_ID': ['NUMBER(19)','NIVELEDUCATIVO_ID'],
          'NOMBRE': ['VARCHAR2(255 CHAR)','NOMBRES'],
          'PRIMER_APELLIDO': ['VARCHAR2(255 CHAR)','PRIMER_APELLIDO'],
          'PROMEDIO_SECUNDARIA': ['NUMBER(4,1)','PROMEDIO_SECUNDARIA'],
          'PROMEDIO_1GDO': ['NUMBER(4,1)','PROMEDIO_1GDO'],
          'PROMEDIO_2GDO': ['NUMBER(4,1)','PROMEDIO_2GDO'],
          'PROMEDIO_3GDO': ['NUMBER(4,1)','PROMEDIO_3GDO'],
          'SEGUNDO_APELLIDO': ['VARCHAR2(255 CHAR)','SEGUNDO_APELLIDO'],
          'STATUS': ['VARCHAR2(9)','STATUS'],
          'TURNO': ['VARCHAR2(255 CHAR)','TURNO'],
          'MUNICIPO': ['VARCHAR2(255 CHAR)','TUTOR_ALCALDIA_MUNICIPIO'],
          'MUNICIPO_ID': ['VARCHAR2(40)','TUTOR_ALCALDIA_MUNICIPIO_ID'],
          'CALLE': ['VARCHAR2(255 CHAR)','TUTOR_CALLE'],
          'TELEFONO': ['VARCHAR2(255 CHAR)','TUTOR_CELULAR_O_TELEFONO_FIJO'],
          'CODIGO_POSTAL': ['VARCHAR2(255 CHAR)','TUTOR_CODIGO_POSTAL'],
          'COLONIA': ['VARCHAR2(255 CHAR)','TUTOR_COLONIA'],
          'CORREO_ELECTRONICO': ['CHAR()','TUTOR_CORREO'],
          'TUTOR_CURP': ['CHAR()','TUTOR_CURP'],
          'ENTIDAD': ['VARCHAR2(255 CHAR)','TUTOR_ENTIDAD'],
          'ENTIDAD_ABREVIACION': ['VARCHAR2(255)','TUTOR_ENTIDAD_ABREVIACION'],
          'ENTIDAD_ID': ['VARCHAR2(40)','TUTOR_ENTIDAD_ID'],
          'NOMBRE_MADRE': ['VARCHAR2(255)','TUTOR_NOMBRE'],
          'NUMERO': ['VARCHAR2(255 CHAR)','TUTOR_NUMERO_EXTERIOR'],
          'NUMERO_INTERNO': ['VARCHAR2(255 CHAR)','TUTOR_NUMERO_INTERIOR'],
          'OCUPACION': ['VARCHAR2(50)','TUTOR_OCUPACION'],
          'PRIMER_APELLIDO_MADRE': ['VARCHAR2(64)','TUTOR_PRIMER_APELLIDO']},
        PADRON_ALUMNOS_FIDEGAR: {
          ID: ['NUMBER(19,0)','ID'],
          CURP: ['VARCHAR2(18 BYTE)','ALUMNO_CURP'],
          NOMBRE: ['VARCHAR2(128 BYTE)','ALUMNO_NOMBRE'],
          PRIMER_APELLIDO: ['VARCHAR2(128 BYTE)','ALUMNO_APATERNO'],
          SEGUNDO_APELLIDO: ['VARCHAR2(128 BYTE)','ALUMNO_AMATERNO'],
          GENERO: ['VARCHAR2(6 BYTE)','ALUMNO_GENERO'],
          CCT: ['VARCHAR2(10 BYTE)','CCT'],
          NOMBRE_ESCUELA: ['VARCHAR2(128 BYTE)','NOMBRE_ESCUELA'],
          TURNO: ['VARCHAR2(16 BYTE)','TURNO'],
          NIVEL: ['VARCHAR2(64 BYTE)','NIVEL'],
          GRADO: ['NUMBER(1,0)','GRADO'],
          COLONIA_CCT: ['VARCHAR2(128 BYTE)','COLONIA'],
          ALCALDIA_CCT: ['VARCHAR2(128 BYTE)','ALCALDIA'],
          CP_CCT: ['VARCHAR2(5 BYTE)','CODIGO_POSTAL'],
          UNIDAD_TERRITORIAL: ['VARCHAR2(16 BYTE)','UNIDAD_TERRITORIAL'],
          TUTOR_CURP: ['VARCHAR2(18 BYTE)','TUTOR_CURP'],
          NOMBRE_MADRE: ['VARCHAR2(128 BYTE)','TUTOR_NOMBRE'],
          PRIMER_APELLIDO_MADRE: ['VARCHAR2(128 BYTE)','TUTOR_APATERNO'],
          SEGUNDO_APELLIDO_MADRE: ['VARCHAR2(128 BYTE)','TUTOR_AMATERNO'],
          PARENTESCO: ['VARCHAR2(16 BYTE)','TUTOR_PARENTESCO'],
          TELEFONO: ['VARCHAR2(15 BYTE)','TUTOR_TELEFONO'],
          CORREO_ELECTRONICO: ['VARCHAR2(128 BYTE)','TUTOR_CORREO'],
          CALLE: ['VARCHAR2(128 BYTE)','TUTOR_CALLE'],
          NUMERO: ['VARCHAR2(128 BYTE)','TUTOR_NUM_EXT'],
          NUMERO_INTERNO: ['VARCHAR2(128 BYTE)','TUTOR_NUM_INT'],
          COLONIA: ['VARCHAR2(128 BYTE)','TUTOR_COLONIA'],
          MUNICIPO: ['VARCHAR2(128 BYTE)','TUTOR_MUNICIPIO'],
          CODIGO_POSTAL: ['VARCHAR2(5 BYTE)','TUTOR_CODIGO_POSTAL'],
          CICLO: ['VARCHAR2(9 BYTE)','CICLO_ESCOLAR'],
          USUARIO_CREACION: ['VARCHAR2(32 BYTE)','USUARIO_CREACION'],
          FECHA_CREACION: ['DATE','FECHA_CREACION'],
          USUARIO_MODIFICACION: ['VARCHAR2(32 BYTE)','USUARIO_MODIFICACION'],
          FECHA_MODIFICACION: ['DATE','FECHA_ACTUALIZACION']},
        W_BECARIOS_2121A_PROMS_ALL: {
          ID: ['NUMBER','ID'],

        },
        W_BECARIOS_RENOVANTES_2122A: {

        }
      }
    },
  www6: { IP: '1.214', SCHEMA: 'siie',
      TABLAS: {
        V_ALUMNOS_INSCRITOS: {
          ID: ['NUMBER(19)','ALUMNO_ID'],
          CURP: ['VARCHAR2(255 CHAR)','CURP'],
          NOMBRE: ['VARCHAR2(255 CHAR)', 'NOMBRES'],
          GENERO: ['VARCHAR2(1)','GENERO'],
          GRADO: ['NUMBER(10)','GRADO'],
          GRUPO: ['VARCHAR2(255 CHAR)','GRUPO']
        }
      }
    },
  www7: { IP: '1.212', SCHEMA: 'saepload',
      TABLAS: {
        MVIEW_ALUMNO_CALIFICACION: {},
        MVIEW_ACE2021_CALIFICACION: {}
      }
    }
}

headers = Object.keys(datos)
blocks = Object.keys(servers)

var Table = {
  view: function() {
    return(m('.col-xs-12',
      m('table.sticky-table.table-striped.table-bordered.table-sm', {id: 'dtHorizontalExample'},
        m('thead',
          m('tr', headers.map (function(d) {return m('th', {colspan: datos[d].length},d)})),
          m('tr', headers.map (function(d) {return datos[d].map( function(f) { return m('th', f.replace(/_/gi," "))} )}))
        ),
      m('tbody',  blocks.map (function(b) {tabs = Object.keys(servers[b]['TABLAS']);
        return(tabs.map(function(t){ if (arguments[1] == 0) {
        return(m('tr', m('th',{rowspan: tabs.length},servers[b]['SCHEMA'],' IP: ',servers[b]['IP']),
          m('td.list-item',t),
          datos['ALUMNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}}),
          datos['TUTOR'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}}),
          datos['ESCUELA'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}}),
            datos['INTERNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}})
          )) } else {
          return(m('tr', m('td.list-item',t),
            datos['ALUMNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}}),
            datos['TUTOR'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}}),
            datos['ESCUELA'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}}),
              datos['INTERNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
                return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
                else {return m('td')}})
            )) }
        })
        )
      }))
)))}}

var Layout = {
    view: function(vnode) {
        return m('main.layout', [
          m('h1','ORACLE'),
          m('section', vnode.children),
          m('div', {id:'chart1', style:'width:600px; height:300px'})
        ])
    }
}

/* Links = {
  view: function(ctrl, props) {
    _links = [
      {text: 'Cards', icon: 'th-large'},
      {text: 'List', icon: 'list'}
    ]
    m 'div.col-xs-12',
      {style: {'margin-bottom': '20px'}},
      m '.btn-group', _links.map (function (d, i) {
        isActive = if m.route() is '/#{d.text}' then ' active' else ''
        m 'a', {
          href: '/#{d.text}'
          config: m.route
          class: 'btn btn-sm btn-default#{isActive}'
        }, [m(glIcon, {icon: d.icon}), ' #{d.text}']}}
}*/

var App = {
    view: function() {
      return(
     m ('div', m(Layout, m(Table)))
    )
   }}

m.route(document.body, '/list', {
  '/list': App
})

/* m.route(document.body, '/list', {
    '/list': {
        render: funct:wion() {
            return m(Layout, m(List))
        }
    },
}) */
