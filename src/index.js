var List = {
    view: function() {
        return m('table.sticky-table',
      m('thead',
        m('tr',
          m('th','Objeto'),
          m('th','CURP alumno'),m('th','NOMBRE alumno')
        )
      ),
      m('tbody', 
            m('tr', m('td', 'PREINSCRIPCIONES_DATOS'), m('td', {Title:'VARCHAR2(18 BYTE)'}, 'CURP'), m('td', {href:'VARCHAR2(64 BYTE)'}, 'NOMBRES'))
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
