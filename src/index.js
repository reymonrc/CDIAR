data = {
  BD: ['Servidor','Objeto'],
  ALUMNO: ['CICLO',	'CURP',	'NOMBRE',	'PRIMER_APELLIDO',	'SEGUNDO_APELLIDO',	'NIVEL',	'GRADO',	'GRUPO',	'GENERO',	'CORREO_GOOGLE',	'CORREO_OTRO',	'CALLE',	'NUMERO',	'ENTIDAD',	'MUNICIPO',	'COLONIA',	'CP',	'TEL',	'TEL_2',	'CORREO-E',	'CORREO-E_2'],
  TUTOR: ['NOMBRE_MADRE',	'PRIMER_APELLIDO_MADRE',	'SEGUNDO_APELLIDO _MADRE', 'NOMBRE_PADRE',	'PRIMER_APELLIDO_PADRE', 'SEGUNDO_APELLIDO_PADRE',],
  ESCUELA: ['CCT',	'DIRECCION']
}

servers = {
  DBU_MATRICULA: {IP: '2.2', SCHEMA: 'procesa_informacion',
      TABLAS: {
        PREINSCRIPCIONES_DATOS: {
          CURP: ['VARCHAR2(18 BYTE)','CURP'],
          NOMBRE: ['VARCHAR2(64 BYTE)', 'NOMBRES']
        },
        ALUMNOS_CORREOS: {
          CURP: ['VARCHAR2(18 BYTE)','S_CURP'],
          NOMBRE: ['VARCHAR2(60 BYTE)', 'S_NOMBRE']
        },
        SOLICITUDES_INSCRIPCION_DATOS: {
          CURP: ['VARCHAR2(18 BYTE)','CURP',],
          CICLO: ['CHAR(9 BYTE)','CICLO_ESCOLAR',],
          NOMBRE: ['VARCHAR2(64 BYTE)', 'NOMBRES']
        }
      }
    },
  www6: { IP: '1.214', SCHEMA: 'siie_consulta',
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
  www7: { IP: '1.212', SCHEMA: 'siieweb_lee',
      TABLAS: {}
    }
}

headers = Object.keys(data)
blocks = Object.keys(servers)

var Table = {
  view: function() {
    return(m('.col-xs-12',
      m('table.sticky-table',
        m('thead',
          m('tr', headers.map (function(d) {return m('th', {colspan: data[d].length},d)})),
          m('tr', headers.map (function(d) {return data[d].map( function(f) { return m('th', f.replace(/_/gi," "))} )}))
        ),
      m('tbody',  blocks.map (function(b) {tabs = Object.keys(servers[b]['TABLAS']);
        return(tabs.map(function(t){ if (arguments[1] == 0) {
        return(m('tr', m('th',{rowspan: tabs.length},servers[b]['SCHEMA'],' IP: ',servers[b]['IP']),
          m('td.list-item',t),
          data['ALUMNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}}),
          data['TUTOR'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}}),
          data['ESCUELA'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
            return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
            else {return m('td')}})
          )) } else {
          return(m('tr', m('td.list-item',t),
            data['ALUMNO'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}}),
            data['TUTOR'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}}),
            data['ESCUELA'].map(function(d){if (servers[b]['TABLAS'][t][d] != null) {
              return m('td',{Title:servers[b]['TABLAS'][t][d][0]},servers[b]['TABLAS'][t][d][1])}
              else {return m('td')}})
            )) }
        })
        )
      }))
)))}}


var List = {
    view: function() {
        return m('table.sticky-table',
      m('thead',
          m('tr', headers.map (function(d) {return m('th', {colspan: data[d].length},d)})),
          m('tr', headers.map (function(d) {return data[d].map( function(f) { return m('th', f.replace(/_/gi," "))} )}))
        ),

      m('tbody',
            m('tr',m('th',{rowspan: 3},'procesa_informacion IP: 2.2'), m('td.list-item', 'PREINSCRIPCIONES_DATOS'),m('td'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'CURP'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'NOMBRES'),
             m('td', {Title:'VARCHAR2(64 BYTE)'},'PRIMERAPELLIDO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'SEGUNDOAPELLIDO'),
             m('td', {Title:'VARCHAR2(32 BYTE)'}, 'NIVEL_EDUCATIVO'), m('td', {Title:'NUMBER(1,0)'},'GRADO'), m('td'), m('td'),m('td'),m('td'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_CALLE'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_NUMERO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_ENTIDAD'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_MUNICIPIO'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'DOMICILIO_COLONIA'), m('td', {Title:'VARCHAR2(5 BYTE)'}, 'DOMICILIO_CODIGO_POSTAL'),
             m('td', {Title:'VARCHAR2(14 BYTE)'}, 'TELEFONO_CELULAR'),m('td', {Title:'VARCHAR2(15 BYTE)'}, 'TEL_OTRO'),m('td', {Title:'VARCHAR2(128 BYTE)'}, 'EMAIL'),m('td', {Title:'VARCHAR2(1128 BYTE)'}, 'EMAIL_ADICIONAL'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'MADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_SEGUNDO_APELLIDO'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'PADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_SEGUNDO_APELLIDO'),m('td'),m('td')
           ),
             m('tr', m('td.list-item', 'ALUMNOS_CORREOS'),m('td'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'S_CURP'), m('td', {Title:'VARCHAR2(60 BYTE)'}, 'S_NOMBRE'),
              m('td', {Title:'VARCHAR2(120 BYTE)'},'S_APELLIDOS'), m('td'),
              m('td', {Title:'VARCHAR2(32 BYTE)'}, 'NIVEL_ESCOLAR'), m('td', {Title:'NUMBER(1,0)'},'GRADO'), m('td', {Title:'VARCHAR2(1 BYTE)'},'GRUPO'), m('td'),
              m('td', {Title:'VARCHAR2(128 BYTE)'},'CORREO_GOOGLE'), m('td', {Title:'VARCHAR2(128 BYTE)'},'CORREO_MICROSOFT'),
              m('td'), m('td'), m('td'),m('td'), m('td'), m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),m('td'),
              m('td', {Title:'VARCHAR2(10 BYTE)'}, 'S_CCT'),m('td', {Title:'VARCHAR2(32 BYTE)'}, 'DIR_GENERAL')
            ),
              m('tr', m('td.list-item', 'SOLICITUDES_INSCRIPCION_DATOS'),m('td',{Title:'CHAR(9 BYTE)'},'CICLO_ESCOLAR'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'CURP'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'NOMBRES'),
               m('td', {Title:'VARCHAR2(64 BYTE)'},'PRIMERAPELLIDO'), m('td',{Title:'VARCHAR2(64 BYTE)'},'SEGUNDOAPELLIDO'),
               m('td'), m('td'), m('td'), m('td'),m('td'), m('td'),
               m('td'), m('td'), m('td'),m('td'), m('td'), m('td'),m('td',{Title:'VARCHAR2(64 BYTE)'},'TELEFONO_CONTACTO'),m('td'),m('td',{Title:'VARCHAR2(256 BYTE)'},'EMAIL'),m('td'),
               m('td',{Title:'VARCHAR2(64 BYTE)'},'TUTOR_NOMBRES'),m('td',{Title:'VARCHAR2(64 BYTE)'},'TUTOR_PRIMERAPELLIDO'),m('td',{Title:'VARCHAR2(64 BYTE)'},'TUTOR_SEGUNDOAPELLIDO'),m('td'),m('td'),m('td'),
               m('td'),m('td')
             ),
/*             m('tr', m('td.list-item', 'PADRON_ALUMNOS_FIDEGAR'),m('td', {Title:'VARCHAR2(9 BYTE)'},'CICLO_ESCOLAR'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'ALUMNO_CURP'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'ALUMNO_NOMBRE'),
              m('td', {Title:'VARCHAR2(128 BYTE)'},'ALUMNO_APATERNO'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'ALUMNO_AMATERNO'),
              m('td', {Title:'VARCHAR2(64 BYTE)'}, 'NIVEL_EDUCATIVO'), m('td', {Title:'NUMBER(1,0)'},'GRADO'), m('td'), m('td'),m('td'),m('td'),
              m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_CALLE'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_NUMERO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_ENTIDAD'),
              m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_MUNICIPIO'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'DOMICILIO_COLONIA'), m('td', {Title:'VARCHAR2(5 BYTE)'}, 'DOMICILIO_CODIGO_POSTAL'),
              m('td', {Title:'VARCHAR2(14 BYTE)'}, 'TELEFONO_CELULAR'),m('td', {Title:'VARCHAR2(15 BYTE)'}, 'TEL_OTRO'),m('td', {Title:'VARCHAR2(128 BYTE)'}, 'EMAIL'),m('td', {Title:'VARCHAR2(1128 BYTE)'}, 'EMAIL_ADICIONAL'),
              m('td', {Title:'VARCHAR2(192 BYTE)'}, 'MADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_SEGUNDO_APELLIDO'),
              m('td', {Title:'VARCHAR2(192 BYTE)'}, 'PADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_SEGUNDO_APELLIDO'),m('td'),m('td')
            ),*/
            m('tr'),
            m('tr',m('th',{rowspan: 1},'siie_consulta IP: 1.214'), m('td.list-item', 'V_ALUMNOS_INSCRITOS'),m('td'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'CURP'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'NOMBRES'),
             m('td', {Title:'VARCHAR2(64 BYTE)'},'PRIMERAPELLIDO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'SEGUNDOAPELLIDO'),
             m('td', {Title:'VARCHAR2(32 BYTE)'}, 'NIVEL_EDUCATIVO'), m('td', {Title:'NUMBER(1,0)'},'GRADO'), m('td'), m('td'),m('td'),m('td'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_CALLE'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_NUMERO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_ENTIDAD'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_MUNICIPIO'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'DOMICILIO_COLONIA'), m('td', {Title:'VARCHAR2(5 BYTE)'}, 'DOMICILIO_CODIGO_POSTAL'),
             m('td', {Title:'VARCHAR2(14 BYTE)'}, 'TELEFONO_CELULAR'),m('td', {Title:'VARCHAR2(15 BYTE)'}, 'TEL_OTRO'),m('td', {Title:'VARCHAR2(128 BYTE)'}, 'EMAIL'),m('td', {Title:'VARCHAR2(1128 BYTE)'}, 'EMAIL_ADICIONAL'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'MADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_SEGUNDO_APELLIDO'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'PADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_SEGUNDO_APELLIDO'),m('td'),m('td')
           ),
       ))
    }
}

var Layout = {
    view: function(vnode) {
        return m('main.layout', [
          m('h1','ORACLE'),
            m('section', vnode.children)
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
      return(m ('div',
        m(Layout, m(List), m(Table))
     ))
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
