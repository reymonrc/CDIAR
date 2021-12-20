var List = {
    view: function() {
        return m('table.sticky-table',
      m('thead',
        m('tr',m('th','BD'),m('th',{colspan: 18},'ALUMNO'),m('th',{colspan: 6},'TUTOR')),
        m('tr',
          m('th','Objeto'),
          m('th','CURP'),m('th','NOMBRE'),m('th','P APELLIDO'),m('th','S APELLIDO'),
          m('th','NIVEL'),m('th','GRADO'),m('th','GRUPO'),m('th','GENERO'),
          m('th','CALLE'),m('th','NUMERO'),m('th','ENTIDAD'),m('th','MUNICIPO'),m('th','COLONIA'),m('th','CP'),m('th','TEL'),m('th','TEL 2'),
          m('th','CORREO-E'),m('th','CORREO-E 2'),m('th','NOMBRE'),m('th','P APELLIDO'),m('th','S APELLIDO'),
		  m('th','NOMBRE'),m('th','P APELLIDO'),m('th','S APELLIDO')
        )
      ),
      m('tbody', 
            m('tr', m('td', 'PREINSCRIPCIONES_DATOS'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'CURP'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'NOMBRES'),
             m('td', {Title:'VARCHAR2(64 BYTE)'},'PRIMERAPELLIDO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'SEGUNDOAPELLIDO'),
             m('td', {Title:'VARCHAR2(32 BYTE)'}, 'NIVEL_EDUCATIVO'), m('td', {Title:'NUMBER(1,0)'},'GRADO'), m('td'), m('td'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_CALLE'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_NUMERO'), m('td', {Title:'VARCHAR2(64 BYTE)'}, 'DOMICILIO_ENTIDAD'),
             m('td', {Title:'VARCHAR2(128 BYTE)'},'DOMICILIO_MUNICIPIO'), m('td', {Title:'VARCHAR2(128 BYTE)'}, 'DOMICILIO_COLONIA'), m('td', {Title:'VARCHAR2(5 BYTE)'}, 'DOMICILIO_CODIGO_POSTAL'),
             m('td', {Title:'VARCHAR2(14 BYTE)'}, 'TELEFONO_CELULAR'),m('td', {Title:'VARCHAR2(15 BYTE)'}, 'TEL_OTRO'),m('td', {Title:'VARCHAR2(128 BYTE)'}, 'EMAIL'),m('td', {Title:'VARCHAR2(1128 BYTE)'}, 'EMAIL_ADICIONAL'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'MADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'MADRE_SEGUNDO_APELLIDO'),
             m('td', {Title:'VARCHAR2(192 BYTE)'}, 'PADRE_NOMBRE'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_PRIMERAPELLIDO'),m('td', {Title:'VARCHAR2(64 BYTE)'}, 'PADRE_SEGUNDO_APELLIDO')
             )
       ))
    }
}

var Layout = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m(m.route.Link, {href: "/list"}, "Users")
            ]),
            m("section", vnode.children)
        ])
    }
}

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(List))
        }
    },
})
