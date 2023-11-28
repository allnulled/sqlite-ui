
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 SQLite UI 🌐</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/sql-en-castellano/sql-en-castellano.parser.js\"></script>\n    <script src=\"lib/sqlite3/sqlite3.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 SQLite UI 🌐</h5>"
 + "    <div>"
 + "      <button style=\"width:100%;\" v-on:click=\"ejecutar_sql\">▶ Execute</button>"
 + "    </div>"
 + "    <div>"
 + "      <textarea class=\"console_style\" v-model=\"script_de_entrada\"></textarea>"
 + "    </div>"
 + "    <div>"
 + "      <textarea class=\"console_style output_style\" v-model=\"script_de_salida\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { script_de_entrada:"",
script_de_salida:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ejecutar_sql() {try {
const sql = this.script_de_entrada;
const inicio = new Date(  );
const resultado = (await this.root.$db.run( sql ));
const finalizamiento = new Date(  );
const tardanza = finalizamiento - inicio;
this.script_de_salida = JSON.stringify(resultado, null, 2) + "\n\nRespuesta procesada en " + ( tardanza / 1000 ) + " segundos.";
} catch(error) {
this.root.gestion_de_error( error );}
}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "    <div class=\"puerto_de_errores\" v-if=\"errores && errores.length\">"
 + "      <div class=\"caja_1\">"
 + "        <table class=\"tabla_de_error\" v-for=\"error, error_index in errores\" v-bind:key=\"'error-' + error_index\">"
 + "          <tr>"
 + "            <td style=\"text-align:center;\">"
 + "              <div style=\"text-align:left;\">"
 + "                <div class=\"window\">"
 + "                  <div class=\"title-bar\">"
 + "                    <div class=\"title-bar-text\">Error</div>"
 + "                  </div>"
 + "                  <div class=\"window-body\">"
 + "                    <div style=\"padding:4px;\">"
 + "                      <div style=\"max-height:100px;overflow:scroll;\">"
 + "                        <div><u style=\"font-weight:bold;\">Type:</u> {{ error.name }}</div>"
 + "                        <div><u style=\"font-weight:bold;\">Message:</u> {{ error.message }}</div>"
 + "                        <div><u style=\"font-weight:bold;\">Stack:</u> {{ error.stack }}</div>"
 + "                      </div>"
 + "                    </div>"
 + "                    <hr />"
 + "                    <div style=\"padding:4px; text-align:right;\">"
 + "                      <button v-on:click=\"() => eliminar_error(error_index)\">Aceptar</button>"
 + "                    </div>"
 + "                  </div>"
 + "                </div>"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </table>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { errores:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ gestion_de_error( error ) {try {
this.errores.push(error)
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_error( error_index ) {try {
this.errores.splice( error_index,
1 );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
async beforeMount() {try {
const sqlite3 = (await window.sqlite3InitModule(  ));
this.$window = window;
const db = new sqlite3.oo1.DB( "/sqlite_ui.sqlite3",
'ct' );
this.$db = { native:db,
run:function( sql ) {try {
return new Promise( ( ok,
fail ) => {try {
const resultRows = [  ];
const resultado = db.exec( { sql,
rowMode:"object",
returnValue:"resultRows"
} );
return ok( resultado );
} catch(error) {
return fail( error );}
} );
} catch(error) {
console.log(error);
throw error;
}

}
};
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");