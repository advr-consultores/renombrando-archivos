<template>
  <base-dialog v-if="correct" @close="confirmError" :title="'Renombramiento invalido'">
    <template #default>        
      {{textValidation}}
    </template>
    <template #actions>
        <button @click="confirmError">Aceptar</button>
    </template>
  </base-dialog>
  <header class="header">
    <h1>Renombrador de archivos ADVR</h1>
  </header>

  <main class="main">
    <selector-cliente class="main_elemento" :opcionesClientes="listaClientes" @seleccionCliente="setCliente">
    </selector-cliente>

    <selector-PCI class="main_elemento" :class="{ 'not_able': showPCI }" @seleccionPCI="setPCI"></selector-PCI>

    <selector-tipo class="main_elemento" :class="{ 'not_able': showTipo }" @seleccionTipo="setTipo"></selector-tipo>

    <div class="main_elemento contenedor" v-if="regla === 'BBVA-NO-FA'">
      <label for="folio">Folio del documento:</label>
      <input name="folio" type="text" v-model="folio">
    </div>

    <base-group class="main_elemento" :class="{ 'not_able': showArchivos }">
      <selector-archivos 
        class="archivos" 
        :class="{ 'archivos--seleccionado': clasePDF }"
        :fileType="'application/pdf'"
        @seleccionArchivo="setPDF"
      >
        {{textoPDF}}
      </selector-archivos>

      <selector-archivos 
        class="archivos" 
        :class="{ 'archivos--seleccionado': claseXML }"
        :fileType="'application/xml'"
        v-if="tipo === 'FACTURA'"
        @seleccionArchivo="setXML"
        >
          {{textoXML}}
      </selector-archivos>
    </base-group>

    <selector-proyecto class="main_elemento" :class="{ 'not_able': showProyecto }" :opcionesProyecto="opcionesProyecto"
      @seleccionProyecto="setProyecto"></selector-proyecto>

    <form-ubicacion class="main_elemento" :class="{ 'not_able': showSucursal }" :cliente="cliente"
      :opcionesEstados="listaEstados" :dbSucursales="dbSucursales" @seleccionSucursal="setSucursal"></form-ubicacion>

    <base-show class="main_elemento not_able contenedor_block" :titulo="'Regla'" :texto="reglaUtilizada"></base-show>
    <!-- <label>Regla ({{cliente}}-{{pci}}):</label> -->
    <!-- <base-show class="main_elemento contenedor_block" :titulo="'Archivo Renombrado'" :texto="renombramiento"></base-show>-->
    <div class="main_elemento contenedor_block">
      <label>Archivo Renombrado</label>
      <p>{{renombramiento}}</p>
    </div>
    


    <div v-if="!editarNombre" class="main_elemento">
      <base-button class="button" @click.prevent="editarNombre = !editarNombre">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="16" height="16"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
          <line x1="16" y1="5" x2="19" y2="8" />
        </svg>
        Editar
      </base-button>
    </div>

    <div v-else class="main_elemento">
      <input class="manual_input" type="text" v-model="renombramiento">
    </div>
    <!-- <button type="button" @click="reset()">reset</button> -->

    <div>
      <base-button class="button" @click.prevent="descargar">Descargar</base-button>
    </div>

    <!-- <div>
      <base-button class="button" @click.prevent="reset()">Reset</base-button>
    </div> -->
  </main>
</template>

<script>
import SelectorCliente from "./components/formularios/SelectorCliente.vue";
import SelectorPCI from "./components/formularios/SelectorPCI.vue";
import SelectorTipo from "./components/formularios/SelectorTipo.vue";
import SelectorArchivos from "./components/formularios/SelectorArchivos.vue"
import SelectorProyecto from "./components/formularios/SelectorProyecto.vue";
import FormUbicacion from "./components/formularios/FormUbicacion.vue";
export default {
  components: {
    'selector-cliente': SelectorCliente,
    'selector-PCI': SelectorPCI,
    'selector-tipo': SelectorTipo,
    'selector-archivos': SelectorArchivos,
    'selector-proyecto': SelectorProyecto,
    'form-ubicacion': FormUbicacion,
  },
  data() {  return {
    //Datos seleccionados del formulario
    cliente: '', pci: '', tipo: '', pdf: '', xml: '',
    proyecto: '', sucursal: '', folio: '',
    //Renombrar archivo
    renombramiento: '----------', editarNombre: false, regla: '',
    //Validaciones
    correct: false, textValidation: '',
    //Lista de opciones para seleccionar
    listaClientes: [
      { value: 'BBVA', text: 'BBVA' },
      { value: 'MOVISTAR', text: 'Movistar' },
      { value: 'CITI', text: 'Citibanamex' },
    ],
    listaProyectos: [
      { value: 'SUELO', text: 'SUELO' },
      { value: 'BASURA', text: 'BASURA' },
      { value: 'AMBIENTAL', text: 'AMBIENTAL' },
      { value: 'FUNCIONAMIENTO', text: 'FUNCIONAMIENTO' },
      { value: 'ANUNCIO', text: 'ANUNCIO' },
      { value: 'OTRO', text: 'OTRO' },
    ],
    listaProyectosPCIMovistar: [
      { value: 'PIPC', text: 'PIPC' },
      { value: 'VOBO', text: 'VOBO' },
      { value: 'IPC', text: 'IPC' },
      { value: 'ANUENCIA', text: 'ANUENCIA' },
      { value: 'OTRO', text: 'OTRO' },
    ],
    listaProyectosPCICitibanamex: [
      { value: 'AC', text: 'AC' },
      { value: 'AF', text: 'AF' },
      { value: 'CF', text: 'CF' },
      { value: 'DA', text: 'DA' },
      { value: 'LF', text: 'LF' },
      { value: 'LFA', text: 'LFA' },
      { value: 'LFR', text: 'LFR' },
      { value: 'MA', text: 'MA' },
      { value: 'OT', text: 'OT' },
      { value: 'PR', text: 'PR' },
      { value: 'PRD', text: 'PRD' },
      { value: 'RA', text: 'RA' },
      { value: 'SLF', text: 'SLF' },
      { value: 'US', text: 'US' },
      { value: 'VBPC', text: 'VBPC' },
      { value: 'VBSOP', text: 'VBSOP' },
      { value: 'ILF', text: 'ILF' },
      { value: 'ALNO', text: 'ALNO' },
      { value: 'LC', text: 'LC' },
      { value: 'BA', text: 'BA' },
      { value: 'RCA', text: 'RCA' },
      { value: 'CPA', text: 'CPA' },
      { value: 'IMA', text: 'IMA' },
      { value: 'ILFA', text: 'ILFA' },
      { value: 'USL', text: 'USL' },
      { value: 'DAL', text: 'DAL' },
      { value: 'LA', text: 'LA' },
      { value: 'SIAPEM', text: 'SIAPEM' },
      { value: 'IAMB', text: 'IAMB' },
      { value: 'CVECAT', text: 'CVECAT' },
      { value: 'IPC', text: 'IPC' },
      { value: 'CLZ', text: 'CLZ' },
      { value: 'PA', text: 'PA' },
      { value: 'LAMB', text: 'LAMB' },
      { value: 'VBSE', text: 'VBSE' },
      { value: 'IUS', text: 'IUS' },
      { value: 'CRB', text: 'CRB' },
      { value: 'PIPC', text: 'PIPC' },
      { value: 'VBPIPC', text: 'VBPIPC' },
      { value: 'VBB', text: 'VBB' },
      { value: 'CMSCI', text: 'CMSCI' },
      { value: 'SIAPEM1', text: 'SIAPEM1' },
      { value: 'CLYF', text: 'CLYF' },
      { value: 'BLF', text: 'BLF' },
      { value: 'ESC', text: 'ESC' },
      { value: 'ILA', text: 'ILA' },
      { value: 'BLFA', text: 'BLFA' },
      { value: 'BLA', text: 'BLA' },
      { value: 'ILFATM', text: 'ILFATM' },
      { value: 'IALNO', text: 'IALNO' },
      { value: 'ACTER', text: 'ACTER' },
      { value: 'ASAT', text: 'ASAT' },
      { value: 'BSAT', text: 'BSAT' },
      { value: 'PRB', text: 'PRB' },
      { value: 'PL', text: 'PL' },
      { value: 'FG', text: 'FG' },
      { value: 'LFATM', text: 'LFATM' },
      { value: 'LAATM', text: 'LAATM' },
      { value: 'IURI', text: 'IURI' },
      { value: 'DEA', text: 'DEA' },
      { value: 'PECO', text: 'PECO' },
      { value: 'PMSPC', text: 'PMSPC' },
      { value: 'BUS', text: 'BUS' },
      { value: 'DEST', text: 'DEST' },
      { value: 'DELE', text: 'DELE' },
      { value: 'PPC', text: 'PPC' },
      { value: 'PEST', text: 'PEST' },
      { value: 'BSIAPEM', text: 'BSIAPEM' },
      { value: 'CSE', text: 'CSE' },
      { value: 'OTRO', text: 'OTRO' },
    ],
    listaEstados: [
{ clave: "AGS", nombre: "Aguascalientes" },
{ clave: "BC", nombre: "Baja California" },
{ clave: "BCS", nombre: "Baja California Sur" },
{ clave: "CHI", nombre: "Chihuahua" },
{ clave: "CHS", nombre: "Chiapas" },
{ clave: "CMP", nombre: "Campeche" },
{ clave: "CMX", nombre: "Ciudad de México" },
{ clave: "COA", nombre: "Coahuila" },
{ clave: "COL", nombre: "Colima" },
{ clave: "DGO", nombre: "Durango" },
{ clave: "GRO", nombre: "Guerrero" },
{ clave: "GTO", nombre: "Guanajuato" },
{ clave: "HGO", nombre: "Hidalgo" },
{ clave: "JAL", nombre: "Jalisco" },
{ clave: "MCH", nombre: "Michoacán" },
{ clave: "MEX", nombre: "Estado de México" },
{ clave: "MOR", nombre: "Morelos" },
{ clave: "NAY", nombre: "Nayarit" },
{ clave: "NL", nombre: "Nuevo León" },
{ clave: "OAX", nombre: "Oaxaca" },
{ clave: "PUE", nombre: "Puebla" },
{ clave: "QR", nombre: "Quintana Roo" },
{ clave: "QRO", nombre: "Queretaro" },
{ clave: "SIN", nombre: "Sinaloa" },
{ clave: "SLP", nombre: "San Luis Potosí" },
{ clave: "SON", nombre: "Sonora" },
{ clave: "TAB", nombre: "Tabasco" },
{ clave: "TLX", nombre: "Tlaxcala" },
{ clave: "TMS", nombre: "Tamaulipas" },
{ clave: "VER", nombre: "Veracruz" },
{ clave: "YUC", nombre: "Yucatán" },
{ clave: "ZAC", nombre: "Zacatecas" },
    ],
    dbSucursales: {
      Guerrero: {
        "IGUALA DE LA INDEPENDENCIA": {
          BBVA: ["(125) IGUALA CENTRO", "(4651) GALERIAS"],
          CITI:["(17533) (176) SUC. IGUALA/EDIF."], MOVISTAR:[], SCOTIABANK:[]
        },
        "CHILPANCINGO DE LOS BRAVO": {
          BBVA: ["(557) CHILPANCINGO OFNA. PRINCIPAL", "(4697) CHILPANCINGO", "(5553) CHILPANCINGO", "(7695) GOBIERNO GUERRERO / EMPRESAS CHILPANCINGO"],
          CITI:[
            "(17540) (173) SUC. CHILPANCINGO/EDIF.",
            "(26750) (4392) SUC. CIUDAD ADMINISTRATIVA/EDIF.",
            "(42952) (5183) SUC. GALERIAS LIVERPOOL CHILPANCINGO",
          ], MOVISTAR:["(812TND01) TIENDA EMBLEMATICA CHILPANCINGO"], SCOTIABANK:[]
        },
        "ACAPULCO DE JUAREZ": {
          BBVA: ["(580) ACAPULCO CONVENCIONES", "(581) ACAPULCO PROGRESO", "(582) ACAPULCO ZOCALO", "(583) SITE ACAPULCO MIGUEL ALEMAN", "(584) ACAPULCO FLAMBOYANT", "(927) SITE ACAPULCO MIGUEL ALEMAN", "(1548) GALERÍAS DIANA ", "(1559) PATIO ACAPULCO", "(2395) H ACAPULCO", "(3031) CENTRO PYME ACAPULCO", "(4661) PLAZA SENDERO ACAPULCO", "(5053) ACAPULCO DIAMANTE",
          "(5540) ACAPULCO VARIEDADES", "(5543) ACAPULCO EJIDO", "(5544) ACAPULCO CUAUHTEMOC", "(6359) ACAPULCO"],
          CITI:[
            "(17547) (456) SUC. COSTERA/EDIF.",
            "(17548) (152) SUC. ACAPULCO/EDIF.",
            "(17550) (317) SUC. PROGRESO",
            "(17551) (924) SUC. COSTA AZUL/EDIF.",
            "(17552) (37) SUC. SABANA",
            "(17553) (4096) SUC. EJIDO",
            "(37360) (9031) SUC. ACAPULCO DIAMANTE",
            "(38974) (9433) SUC. CONSTITUYENTES ACAPULCO"
          ],
          MOVISTAR:[
            "(12-03040) PARQUE PAPAGALLO",
            "(812MCA01) ISLA SENDERO ACAPULCO",
            "(812TYO01) CAC ACAPULCO",
            "(812MCA02) MINI CAC GRAN PLAZA ACAPULCO",
            "(812MCA07) PLAZA MOVISTAR MULTIPLAZA PALMAS ACAPULCO"
          ],
          SCOTIABANK:[]
        },
        OMETEPEC: {
          BBVA: ["(874) OMETEPEC OFICINA PRINCIPAL"],
          CITI:["(50943) (44) SUC. OMETEPEC (REUB)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TAXCO DE ALARCON": {
          BBVA: ["(1553) LAS AMERICAS TAXCO", "(5561) TAXCO PLATEROS", "(5562) TAXCO OF. PRINCIPAL"],
          CITI:["(17521) (911) SUC. TAXCO"], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN MARCOS": {
          BBVA: ["(4637) SAN MARCOS GUERRERO"],
          CITI:["(17523) (62) SUC. SAN MARCOS"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLAPA DE COMONFORT": {
          BBVA: ["(5086) TLAPA"],
          CITI:[
            "(17519) (4602) SUC. TLAPA DE COMONFORT"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        TIXTLA: {
          BBVA: ["(5309) TIXTLA"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "HUITZUCO DE LOS FIGUEROA": {
          BBVA: ["(5555) CHICHIHUALCO"],
          CITI:["(17536) (772) SUC. HUITZUCO (REUB)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ATOYAC DE ALVAREZ": {
          BBVA: ["(5563) ATOYAC CENTRO"],
          CITI:["(17545) (444) SUC. ATOYAC DE ALVAREZ GUERRERO"], MOVISTAR:[], SCOTIABANK:[]
        },
        PUNGARABATO: {
          BBVA: ["(5565) ALTAMIRANO GRO."],
          CITI:[
            "(17524) (445) SUC. CD ALTAMIRANO (NUEVA)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        PETATLAN: {
          BBVA: ["(5567) PETATLAN CENTRO"],
          CITI:["(30232) (7179) SUC. PETATLAN"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TECPAN DE GALEANA": {
          BBVA: ["(5568) TECPAN CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        ARCELIA: {
          BBVA:["(5570) ARCELIA CENTRO"],
          CITI:["(17546) (418) SUC. ARCELIA GUERRERO"], MOVISTAR:[], SCOTIABANK:[]
        },
        TELOLOAPAN: {
          BBVA: ["(5572) TELOLOAPAN"],
          CITI:["(17520) (565) SUC. TELOLOAPAN"], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CHILAPA DE ALVAREZ": {
          BBVA: ["(5574) CHILAPA CENTRO"],
          CITI:["(17543) (490) SUC. CHILAPA"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ZIHUATANEJO DE AZUETA": {
          BBVA: ["(5576) ZIHUATANEJO CENTRO", "(5577) IXTAPA OFICINA PRINCIPAL IXTAPA"],
          CITI:["(17527) (18) SUC. ZIHUATANEJO"], MOVISTAR:[], SCOTIABANK:[]
        },
        "COYUCA DE BENITEZ": {
          BBVA: [],
          CITI:["(17539) (4450) SUC. COYUCA"], MOVISTAR:[], SCOTIABANK:[]
        },
        "AYUTLA DE LOS LIBRES": {
          BBVA: [],
          CITI:["(30227) (7180) SUC. AYUTLA"], MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Zacatecas: {
        FRESNILLO: {
          BBVA: ["(311) FRESNILLO ALLENDE", "(868) SORIANA FRESNILLO "],
          CITI:[ "(20873) (163) SUC. FRESNILLO" ],
          MOVISTAR:["(732TND01) PVTA&OFIC FRESNILLO"], SCOTIABANK:["FRESNILLO"]
        },
        GUADALUPE: {
          BBVA: ["(313) ZACATECAS LOPEZ PORTILLO", "(5967) GUADALUPE CENTRO"],
          CITI:[
            "(20870) (607) SUC. LA FLORIDA",
            "(20872) (0) EDIF. LOPEZ PORTILLO 101",
            "(26545) (4552) SUC. GUADALUPE ZAC",
          ],
          MOVISTAR:[], SCOTIABANK:[]  
        },
        JEREZ: {
          BBVA: ["(490) JERÉZ GARCÍA SALINAS"],
          CITI:[ "(20867) (898) SUC. JEREZ"], MOVISTAR:[], SCOTIABANK:[]
        },
        ZACATECAS: {
          BBVA: ["(2335) H ZACATECAS", "(2467) PLAZA ALESSIA", "(5021) ZACATECAS PLAZA TAHONA", "(5952) ZACATECAS CENTRO", "(5953) ZACATECAS OFNA. PRINCIPAL", "(6345) ZACATECAS"],
          CITI:["(20861) (166) SUC. ZACATECAS/EDIF"],
          MOVISTAR:["(732TYO01) CAC ZACATECAS"],
          SCOTIABANK:["COLINAS", "ZACATECAS"]  
        },
        JALPA: {
          BBVA: ["(3963) JALPA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        JUCHIPILA: {
          BBVA: ["(3964) JUCHIPILA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "NOCHISTLAN DE MEJIA": {
          BBVA: ["(3966) NOCHISTLAN CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        LORETO: {
          BBVA: ["(3968) LORETO CENTRO"],
          CITI:[ "(20866) (4635) SUC. LORETO ZAC"], MOVISTAR:[], SCOTIABANK:[]
        },
        TABASCO: {
          BBVA: ["(3970) TABASCO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        SOMBRERETE: {
          BBVA: ["(5288) SOMBRERETEf"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        PINOS: {
          BBVA: ["(5780) PINOS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "RIO GRANDE": {
          BBVA: ["(5956) RIO GRANDE CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLALTENANGO DE SANCHEZ ROMAN": {
          BBVA: ["(5961) TLALTENANGO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CALERA": {
          BBVA: ["(5963) CALERA 5 DE MAYO"],
          CITI:[ "(20880) (4498) SUC. CALERA", "(39990) (9620) SUC. MODELO ZACATECAS]"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "JUAN ALDAMA": {
          BBVA: ["(5965) JUAN ALDAMA CENTENARIO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        OJOCALIENTE: {
          BBVA: ["(5968) OJOCALIENTE CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VALPARAISO: {
          BBVA: ["(5969) VALPARAISO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "MONTE ESCOBEDO": {
          BBVA: ["(5971) MONTE ESCOBEDO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TEUL DE GONZALEZ ORTEGA": {
          BBVA: ["(5972) TEUL DE GONZALEZ ORTEGA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
      },
      "San Luis Potosi": {
        MATEHUALA: {
          BBVA: ["(330) MATEHUALA HIDALGO", "(5283) MATEHUALA"],
          CITI:[ "(20543) (64) SUC. MATEHUALA" ], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN LUIS POTOSI": {
          BBVA: [
            "(331) SAN LUIS POTOSI MUÑOZ", "(332) SAN LUIS POTOSI GIGANTE", "(335) SAN LUIS POTOSI ABASTOS", "(336) SAN LUIS POTOSI SALVADOR NAVA", "(471) ", "(472) ", "(830) EMPRESAS SAN LUIS POTOSI", "(1431) MERCADO PLAZA AREA", "(2332) H S.L.P.", "(3057) CENTRO PYME SAN LUIS POTOSI FORANEA", "(4787) CITADELLA ( Irregular)", "(5029) LA GRAN LOMA", "(5104) PLAZA SENDERO SAN LUIS POTOSI",
            "(5771) SAN LUIS POTOSI GLORIETA", "(5774) SAN LUIS POTOSI LOMAS", "(5775) SAN LUIS POTOSI PLAZA EL DORADO", "(6391) SAN LUIS POTOSI",
          ],
          CITI:[
            "(20495) (383) SUC. GLORIETA JUAREZ/EDIF",
            "(20499) (691) SUC. PLAZA TANGAMANGA SLP",
            "(20503) (4536) SUC. UNIVERSIDAD SLP",
            "(20504) (995) SUC. MEGA CHALITA",
            "(20533) (127) SUC. SAN LUIS POTOSI/EDIF",
            "(20534) (21) SUC. JULIO VERNE/EDIF",
            "(20538) (4874) SUC. LOMAS SAN CARLOS",
            "(26806) (775) SUC. JOSE DE GALVEZ",
            "(50784) (6567) SUC. CENTRAL DE ABASTOS SLP",
            "(52033) (6574) SUC. MABE SLP",
            "(56469) (7366) SUC. CHAPULTEPEC 1200",
            "(57402) (9724) SUC. SEC BMW SAN LUIS POTOSI"
          ],
          MOVISTAR:[
            "(724TYO01) CAC SAN LUIS POTOSI",
            "(724MCA01) MINI CAC CONSTITUCION",
            "(724MCA03) ISLA SENDERO SAN LUIS",
            "(724MCA09) SENDERO SAN LUIS",
            "(724TND02) CAC CARRANZA SAN LUIS POTOSÍ",
            "(724TND06) ISLA PLAZA DEL CARMEN SLP",
            "(724TND08)	CAC CENTRO SLP",
            "(724MCA07)	PLAZA MOVISTAR SAN LUIS POTOSÍ"
          ],
          SCOTIABANK:[
            "AVENIDA CARRANZA",
            "LOMAS DE SAN LUIS",
            "MACROPLAZA",
            "SENDERO",
            "TANGAMANGA"
          ]
        },
        "RIOVERDE": {
          BBVA: ["(496) "],
          CITI:[ "(20541) (178) SUC. RIO VERDE" ], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CIUDAD VALLES": {
          BBVA: ["(785) CD. VALLES BOULEVARD", "(6529) CD. VALLES HIDALGO"],
          CITI:[ 
            "(20545) (4389) SUC. BLVD. CD. VALLES/EDIF.",
            "(20546) (198) SUC. CD. VALLES/REUBICACION"
          ],
          MOVISTAR:[],
          SCOTIABANK:["CD VALLES"]  
        },
        "EL NARANJO": {
          BBVA: ["(4477) EL NARANJO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SOLEDAD DE GRACIANO SANCHEZ": {
          BBVA: ["(5071) S. L. P. SOLEDAD"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CARDENAS: {
          BBVA: ["(5786) CARDENAS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "CIUDAD DEL MAIZ": {
          BBVA: ["(5787) CIUDAD DEL MAIZ CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CERRITOS: {
          BBVA: ["(5789) CERRITOS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VENADO: {
          BBVA: ["(5791) VENADO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        TAMAZUNCHALE: {
          BBVA: ["(6530) TAMAZUNCHALE 20 DE NOVIEMBRE"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        EBANO: {
          BBVA: ["(6532) EBANO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SALINAS": {
          BBVA: ["(6829) SALINAS DE HIDALGO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SANTA MARIA DEL RIO": { BBVA: ["(6830) STA. MARIA DEL RIO CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "VILLA DE REYES": {
          BBVA: [],
          CITI:["(37266) (8255) SUC. GENERAL MOTORS SLP", "(56711) (8401) SUC. SEC GM SAN LUIS POTOSI"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Chiapas: {
        TAPACHULA: {
          BBVA: ['(544) TAPACHULA', "(4745) TAPACHULA GALERÍAS", "(5007) TAPACHULA PLAZA INN", "(5285) TAPACHULA PLAZA COBALTO", "(5391) TAPACHULA"],
          CITI:[
            "(17491) (552) SUC. TACANA/EDIF. 7a. PONIENTE 5",
            "(17495) (130) SUC. TAPACHULA / EDIF. CENTRAL # 31",
            "(56186) (4196) SUC. PUERTO MADERO REU"
          ],
          MOVISTAR:[
            "(507TYO02) CAC TAPACHULA",
            "(07-03604) OCTAVA ORIENTE",
            "(507TYO03) CAC TUXTLA GUTIERREZ"
          ],
          SCOTIABANK:["TAPACHULA"]
        },
        "SAN CRISTOBAL DE LAS CASAS": {
          BBVA: ['(547) SAN CRISTOBAL CENTRO', "(2297) PYME SAN CRISTOBAL DE LAS CASAS", "(4439) SAN CRISTOBAL OFNA. PRINCIPAL", "(4728) SAN CRISTOBAL EJE VIAL"],
          CITI:["(38758) (4100) SUC. PLAZA SAN DIEGO (REUB)", "(38972) (386) SUC. SAN CRISTOBAL (REUB)"],
          MOVISTAR:["(507TYO01) CAC SAN CRISTOBAL DE LAS CASAS"],
          SCOTIABANK:["SAN CRISTOBAL DE LAS CASAS"]
        },
        "TUXTLA GUTIERREZ": {
          BBVA:[
            '(896) TERÁN', "(1394) AMBAR FASHION", "(1581) LAS AMERICAS TUXTLA", "(4710) PLAZA LAS PALMAS", "(4785) TUXTLA MIRADOR", "(5009) TUXTLA SORIANA ORIENTE", "(5058) TUXTLA MIRAVALLE", "(5191) TUXTLA PLAZA SAN LUIS", "(5264) PLAZA DEL SOL", "(6697) TUXTLA", "(6698) TUXTLA KRYSTAL", "(6699) MERCADO","(6700) TUXTLA",
          ],
          CITI:[
            "(17465) (179) SUC. TUXTLA / EDIF. 1a SUR PTE",
            "(17468) (46) SUC. TERAN / EDIF. BELISARIO DOMINGUEZ",
            "(17469) (596) SUC. BONAMPAK",
            "(29117) (4261) SUC. ELECTRICISTAS (REUB)",
            "(34847) (7419) SUC. PLAZA TUXTLA SOL ",
            "(34935) (7418) SUC. PLAZA POLIFORUM TUXTLA",
            "(36628) (8179) SUC. 9a. SUR PONIENTE",
            "(41551) (4099) SUC. ALBINO CORZO (REUB)",
            "(56611) (8831) SUC. LAURELES"
          ],
          MOVISTAR:[ "(07-03526) LOMAS DEL VALLE" ],
          SCOTIABANK:["TULXTLA GUTIERREZ", "PLAZA BONAMPAK", "POLIFORUM", "QUINTA NORTE"]
        },
        "LAS MARGARITAS": { BBVA: ["(1910) LAS MARGARITAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        OCOSINGO: { BBVA: ["(2292) OCOSINGO CHIAPAS"], CITI:["(17509) (30) SUC. OCOSINGO"], MOVISTAR:[], SCOTIABANK:[] },
        HUIXTLA: { BBVA: ["(4437) HUIXTLA CENTRO"], CITI:["(17511) (226) SUC. HUIXTLA (REUB)"], MOVISTAR:[], SCOTIABANK:[] },
        "COMITAN DE DOMINGUEZ": {
          BBVA: ["(4441) COMITAN OFNA. PRINCIPAL", "(6703) COMITAN BOULEVARD"],
          CITI:[
            "(17513) (273) SUC. COMITAN",
            "(26923) (4452) SUC. BALUN CANAN (REUB)"
          ],
          MOVISTAR:[], SCOTIABANK:[] },
        REFORMA: { BBVA: ["(4645) REFORMA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        MOTOZINTLA: { BBVA: ["(5263) MOTOZINTLA"] },
        ARRIAGA: { BBVA: ["(5394) ARRIAGA CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TONALA: { BBVA: ["(5397) TONALÁ"], CITI:["(17489) (324) SUC. TONALA"], MOVISTAR:[], SCOTIABANK:[] },
        PIJIJIAPAN: { BBVA: ["(5398) PIJIJIAPAN CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "FRONTERA COMALAPA": { BBVA: ["(5404) FRONTERA COMALAPA CENTRO"], CITI:["(17512) (743) SUC. FRONTERA COMALAPA"], MOVISTAR:[], SCOTIABANK:[] },
        "CHIAPA DE CORZO": { BBVA: ["(6709) CHIAPA DE CORZO CENTRO"], CITI:["(17516) (4412) SUC. CHIAPA DE CORZO"], MOVISTAR:[], SCOTIABANK:[] },
        VILLAFLORES: {
          BBVA: ["(6711) VILLAFLORES CENTRO"],
          CITI:["(44908) (296) SUC. VILLAFLORES (REUB) / EST."],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CINTALAPA: { BBVA: ["(6713) CINTALAPA CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        PALENQUE: {
          BBVA: ["(6715) PALENQUE CENTRO"],
          CITI:["(46443) (343) SUC. PALENQUE (REUB)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        YAJALON: { BBVA: ["(6717) YAJALON CENTRO"], CITI:["(17462) (788) SUC. YAJALON"], MOVISTAR:[], SCOTIABANK:[] },
        "VENUSTIANO CARRANZA": { BBVA: ["(6718) VENUSTIANO CARRANZA CHIAPAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "OCOZOCOAUTLA DE ESPINOSA": {
          BBVA: [],
          CITI:["(17508) (61) SUC. OCOZOCOAUTLA"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "LAS ROSAS": { BBVA: [], CITI: ["(17510) (73) SUC. VILLA LAS ROSAS"], MOVISTAR:[], SCOTIABANK:[] },
        PICHUCALCO: {
          BBVA: [],
          CITI: [
            "(36629) (357) SUC. PICHUCALCO (REUB)"
          ],
          MOVISTAR:[], SCOTIABANK:[] }
      },
      Tlaxcala: {
        "PAPALOTLA DE XICOHTENCATL": {
          BBVA: ["(513) PANZACOLA INDUSTRIAS"],
          CITI:[ "(30248) (7178) SUC. PANZACOLA TLAXCALA"], MOVISTAR:[], SCOTIABANK:[]
        },
        HUAMANTLA: {
          BBVA: ["(538) HUAMANTLA JUAREZ"],
          CITI:[
            "(26518) (792) SUC. HUAMANTLA"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        CHIAUTEMPAN: {
          BBVA: ["(690) SANTA ANA CHIAUTEMPAN", "(5259) PLAZA DIAMANTE"],
          CITI:["(18652) (425) SANTA ANA CHIAUTEMPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TLAXCALA: {
          BBVA: ["(5882) OFICINAPRINCIPAL"],
          CITI:[ "(18643) (553) SUC. TLAXCALA / EDIF."],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APIZACO: {
          BBVA: ["(5884) APIZACO"],
          CITI:["(18653) (648) SUC. APIZACO", "(18654) (4454) SUC. BLVD. MADERO (REUB)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CALPULALPAN: { BBVA: ["(5888) CALPULALPAN CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TLAXCO: { BBVA: ["(5890) TLAXCO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ZACATELCO: { BBVA: ["(5891) ZACATELCO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        NATIVITAS: { BBVA: ["(5892) NATIVITAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      Nayarit: {
        COMPOSTELA: { BBVA: ["(661) COMPOSTELA", "(5674) LAS VARAS", "(5678) LA PEÑITA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TEPIC: { BBVA: ["(765) PLAZA LA CANTERA", "(767) AUTOSERVICIO FORUM TEPIC", "(911) INSURGENTES", "(912) MOLOLOA", "(913) PRINCIPAL TEPIC", "(4602) TEPIC XALISCO", "(5297) NAYAR ABASTOS TEPIC", "(6373) TEPIC"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "BAHIA DE BANDERAS": { BBVA: ["(5224) BUCERIAS", "(8137) MEZCALES"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ACAPONETA: { BBVA: ["(5659) ACAPONETA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SANTIAGO IXCUINTLA": { BBVA: ["(5661) SANTIAGO IXCUINTLA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TUXPAN: { BBVA: ["(5663) TUXPAN"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TECUALA: { BBVA: ["(5665) TECUALA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "IXTLAN DEL RIO": { BBVA: ["(5669) IXTLAN"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SAN BLAS": { BBVA: ["(5671) VILLA HIDALGO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      "Quintana Roo": {
        "BENITO JUAREZ": {
          BBVA: [
            "(850) CANCUN AV. TULUM", "(851) CANCUN ZONA HOTELERA", "(1073) CANCÚN PLAZA LAS AMÉRICAS", "(1367) GRAN PLAZA CANCÚN", "(1487) PLAZA HEROES CANCUN", "(1488 MULTIPLAZA CANCÚN)", "(1571) CANCUN MALL", "(1572) CENTRO MAYA", "(1575) FORUM BY THE SEA", "(1577) LA ISLA CANCÚN E ISLA II", "(1580) LAS AMERICAS PLAYA DEL CARMEN", "(1582) MALECÓN AMÉRICAS CANCÚN",
            "(1583) PABELLÓN CUMBRES CANCÚN", "(1591) PUNTA LANGOSTA", "(1807) EMPRESAS Y GOBIERNO CANCUN", "(2366) HIPOTECARIA CANCUN", "(2821) CENTRO CORPORATIVO CANCÚN", "(4640) PASEO CANCUN", "(4675) PABELLON CUMBRES CANCUN", "(5035) LA LUNA CANCUN", "(5057) CANCUN KABAH", "(5103) PLAZA HOLLYWOOD", "(5762) CANCUN PLAZA PORTALES",
            "(5764) CANCUN OFNA. PRINCIPAL/CANCUN", "(6351) CANCUN",
          ],
          CITI:[],
          MOVISTAR:[
            "(523MCA02) MINI CAC LA GRAN PLAZA CANCUN",
            "(523MCA04) MINI CAC MULTIPLAZA KABAH",
            "(523MCA05) MINI CAC MULTIPLAZA VILLAS DEL MAR",
            "(523TYO02) CAC CANCUN TEM",
            "(523MCA08) MINICAC PLAZA LAS AMERICAS CANCUN",
            "(23-03004) YAXCHILAN - KABAH",
            "(523MCA09) PLAZA MOVISTAR AV TULUM"
          ],
          SCOTIABANK:[]
        },
        COZUMEL: { BBVA: ["(854) COZUMEL CENTRO", "(5284) COZUMEL PLAZA NORTE"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "PUERTO MORELOS": { BBVA: ["(873) PUERTO MORELOS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        SOLIDARIDAD: {
          BBVA: ["(1840) EMPRESAS Y GOBIERNO PLAYA DEL CARMEN", 2050, "(2272) PUERTO AVENTURAS", "(2372) ", "(2609) SITE PLAYA DEL CARMEN", "(4762) CONSTITUYENTES PLAYA DEL CARMEN", "(5133) PLAYACAR CENTRO MAYA", "(5765) COZUMEL PLAZA NORTE"],
          CITI:[], MOVISTAR:["(523MCA01) MINI CAC PLAZA INN CANCUN", "(523TND05) MINI CAC P. CARMEN"], SCOTIABANK:[]
        },
        "FELIPE CARRILLO PUERTO": { BBVA: ["(1913) FELIPE CARILLO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TULUM: { BBVA: ["(2277) PYME TULUM", "(5089) TULUM RIVIERA MAYA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "OTHON P. BLANCO":{
          BBVA: ["(5031) LAS AMERICAS CHETUMAL", "(5757) CHETUMAL PRINCIPAL"],
          CITI:[],
          MOVISTAR:[
            "(523TND02) MINI CAC BANCA MIFEL SA FID",
            "(523TYO01) CAC CHETUMAL"
          ], 
          SCOTIABANK:[] },
      },
      Aguascalientes: {
        "JESUS MARIA": {
          BBVA: [],CITI:["(19792) (727) SUC. JESUS MARIA"], MOVISTAR:[], SCOTIABANK:[]
        },
        AGUASCALIENTES: {
          BBVA: [],
          CITI:[
            "(19801) (102) SUC. AGUASCALIENTES",
            "(19802) (658) SUC. PULGAS PANDAS",
            "(19804) (885) SUC. PLAZA SAN MARCOS",
            "(19805) (84) SUC. CIRCUNVALACION SUR",
            "(19806) (4718) SUC. JARDINES DE ASUNCION CITI",
            "(19807) (4897) SUC. SANTA ANITA",
            "(19827) (4371) SUC. CORPORATIVO AGS/EDIF",
            "(28723) (4053) SUC. GALERIAS AGS",
            "(34355) (7449) SUC. SENSATA AGS",
            "(36515) (7529) SUC. ALTARIA",
            "(43264) (840) SUC. INEGI EDIF SEDE",
            "(43265) (4377) SUC. INEGI PARQUE HEROES",
            "(56470) (6969) SUC. NUEVA SIGLO XXI",
            "(56961) (8827) SUC ESPACIO AGUASCALIENTES",
            "(56983) (8402) SUC. MODELO TRES CENTURIA",
          ],
          MOVISTAR:[
            "(701TND01) CAC CALLE MORELOS AGUASCALIENTES",
            "(701TYO01) CAC  AGUASCALIENTES",
            "(01-05701) MSC L. PONCE",
            "(701MCA01) MINI CAC VELARIA MALL",
            "(701MCA02) MINI CAC VILLA ASUNCION",
            "(701TND02) PLAZA GUADALUPE AGUASCALIENTES",
            "(701TND04) MINI CAC PARQUE HIDALGO AGUASCALIENTES"
          ],
          SCOTIABANK:[]
        },
      },
      "Baja California Sur": { },
      "Baja California": {
        Tijuana: {
          BBVA: [], CITI:[], MOVISTAR:[
            "(102MCA07) PLAZA MOVISTAR TIJUANA LAS BRISAS",
            "(102MCA09) SENDERO TIJUANA",
            "(102TND01) CAC PASEO DE LOS HEROES",
            "(102TND06) TIJUANA",
            "(102TND09) CAC PASEO TIJUANA 2000",
            "(102TND12) MACROPLAZA TIJUANA",
            "(102TND13) PACIFICO TIJUANA",
            "(102TND15) CONSTITUCION TIJUANA",
            "(102TND19) CAC SANTA FE TIJUANA",
            "(102TND20) PAZA ALAMEDA OTAY TIJUANA",
            "(102TND22) PLAZA LOMA BONITA",
          ], SCOTIABANK:[]
        },
        Mexicali: {
          BBVA: [], CITI:[], MOVISTAR:[
          "(102MCA08) PLAZA MOVISTAR NUEVO MEXICALI",
          "(102MCA10) NUEVO MEXICALI",
          "(102TND05) CAC JUSTO SIERRA MEXICALI",
          "(102TND08) CAC GALERIAS DEL VALLE",
          "(102TND16) MINI CAC PLAZA MONARCAS MEXICALI",
          ], SCOTIABANK:[]
        }
      },
      Campeche: {
        CAMPECHE: {
          BBVA: [], CITI:[], MOVISTAR:["(504TND01) CAC CD. DEL CARMEN"],
          SCOTIABANK:["CAMPECHE"]
        },
        CARMEN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["PLAZA AVIACIÓN"]
        }
      },
      Coahuila: {
        ACUNA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["CD ACUÑA"]
        },
        MONCLOVA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["MONCLOVA", "NODRIZA CONSTITUCIÓN"]
        },
        MUZQUIZ: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["MELCHOR MÚZQUIZ"]
        },
        "PIEDRAS NEGRAS":{
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["PIEDRAS NEGRAS"]
        },
        SABINAS: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["SABINAS"]
        },
        SALTILLO: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "FRANCISCO COSS",
            "REPUBLICA",
            "SAN PATRICIO",
            "LA NOGALERA",
            "GALERIAS SALTILLO",
            "SENDERO SALTILLO",
            "TERRENO CUATRO CIENEGAS"
          ]
        },
        TORREON: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "TORREON", "INDEPENDENCIA", "COLON", "LA ROSITA", "EL FRESNO (GARCÍA LORCA)"]
        }
      },
      Colima: {
        MANZANILLO: {
          BBVA: [], CITI:[],
          MOVISTAR:["(606TND01) MINI CAC MANZANILLO"], SCOTIABANK:[]
        },
        COLIMA: {
          BBVA: [], CITI:[],
          MOVISTAR:["(606TYO01) CAC COLIMA"], SCOTIABANK:[]
        }
      },
      Chihuahua: {
        "NUEVO CASAS GRANDES": {
          BBVA: [],
          CITI:[ "(17243) (337) SUC. NVO. CASAS GRANDES", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        NAMIQUIPA: {
          BBVA: [],
          CITI:[ "(17244) (835) SUC. NAMIQUIPA", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        JUAREZ: {
          BBVA: [],
          CITI:[
            "(17246) (74) SUC. RIO GRANDE",
            "(17247) (833) SUC. PASO DEL NORTE",
            "(17248) (843) SUC. PUENTE INTERNACIONAL",
            "(17249) (142) SUC. CD. JUAREZ",
            "(17251) (652) SUC. SENECU (REUB)",
            "(17252) (0) EDIF. P.TRIUNFO DE LA REP. # 3980",
            "(17255) (4492) SUC. AEROPUERTO",
            "(17257) (4476) SUC. HENEQUEN",
            "(17278) (4139) SUC. SEC. SCIENTIFIC ATLANTA",
            "(26600) (4209) SUC. TOMAS FERNANDEZ",
            "(26900) (579) SUC. LAS TORRES",
            "(26982) (4601) SUC. ZARAGOZA",
            "(27051) (929) SUC. LAS MISIONES",
            "(33208) (4066) SUC. PASEO",
            "(36962) (7515) SUC. SAN LORENZO",
            "(38712) (7514) SUC. CORTIJO",
            "(44943) (4426) SUC. SEC MUNICIPIO CIUDAD JUAREZ",
            "(57035) (251) SUC. MINA REUB.",
            "(57407) (9802) SUC. SEC MOLEX JUAREZ"
          ],
          MOVISTAR:["(308TND10) SENDERO CD. JUAREZ"], SCOTIABANK:[]
        },
        GUERRERO: {
          BBVA: [],
          CITI:[ "(17327) (836) SUC. CD. GUERRERO" ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CUAUHTEMOC: {
          BBVA: [],
          CITI:[
            "(17331) (172) SUC. CUAUHTEMOC REUB.",
            "(29088) (4141) SUC. SAN ANTONIO",
            "(45414) (6429) SUC. MANITOBA",
            "(55675) (55675) ATM. ALSUPER 3 CULTURAS",
            "(51807) (55675) ATM. ALSUPER MANZANEROS"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CHIHUAHUA: {
          BBVA: [],
          CITI:[
            "(17337) (0) EDIF. ZARCO",
            "(17339) (108) SUC. CHIHUAHUA/EDIF.",
            "(17340) (838) SUC. BLVD. ORTIZ MENA/EDIF.",
            "(17341) (830) SUC. PROVINCIAL/EDIF.",
            "(17342) (933) SUC. SICOMOROS",
            "(17349) (4622) SUC. JUVENTUD",
            "(17353) (4481) SUC. SHAKESPEARE",
            "(17354) (4747) SUC. INDEPENDENCIA CENTRO CITI/EDIF.",
            "(17356) (4554) SUC. SEC FORD CHIH",
            "(17357) (4294) SUC. SEC MOTOROLA CHIHUAHUA",
            "(26595) (4123) SUC. SAN FRANCISCO",
            "(26596) (847) SUC. INDUSTRIAS",
            "(26597) (4610) SUC. NUEVA ESPANA",
            "(32886) (4103) SUC. LEONES",
            "(32888) (934) SUC. SANTO NINO",
            "(39845) (9587) SUC. SEC TRW SAUCITO",
            "(56527) (8001) SUC. SEC. FORD CHIHUAHUA",
            "(59523) (4109) SUC. PACHECO REUB.",
            "(41863) (2429) ATM. AL SUPER LA CANTERA",
            "(17372) (2429) ATM. AL SUPER NOGALES",
            "(43766) (2429) ATM. AL SUPER ANTHONY QUINN",
            "(17348) (2429) ATM. AL SUPER",
            "(17367) (2429) ATM. AL SUPER FLORES MAGON",
            "(17364) (2429) ATM. SORIANA FUENTES MARES",
            "(34870) (2429) ATM. BAHIAS FUTURAMA",
            "(51806) (2429) ATM. ALSUPER ROBINSON",
            "(55388) (2429) ATM. ALSUPER ARBOLEDAS",
            "(48709) (2429) ATM. AL SUPER CAMPUS",
            "(47892) (2429) ATM. AL SUPER CERRO GRANDE",
            "(47723) (2429) ATM. AL SUPER LA FUENTE"
          ],
          MOVISTAR:["(308COR04) OFICINA REGIONAL CHIHUAHUA", "(308MCA01) MINI CAC VALLARTA"], SCOTIABANK:[]
        },
        DELICIAS: {
          BBVA: [],
          CITI:[ "(17409) (155) SUC. DELICIAS REUBIC", "(26894) (4783) SUC. DELICIAS"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CAMARGO: {
          BBVA: [],
          CITI:[ "(17411) (647) SUC. CD. CAMARGO" ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "HIDALGO DEL PARRAL": {
          BBVA: [],
          CITI:[ "(26985) (550) SUC. ALTAVISTA"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      "Ciudad de México": {
        "ALVARO OBREGON": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "AVENIDA TOLUCA",
            "GARDEN SANTA FE",
            "GUADALUPE INN",
            "PORTAL SAN ANGEL",
            "PEDREGAL",
            "PLAZA INN",
            "SAN JERONIMO",
            "SANTA TERESA"
          ]
        },
        COYOACAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "CAFETALES  MÓDULO",
            "CALZADA DEL HUESO",
            "CAMPESTRE CHURUBUSCO",
            "COYOACAN",
            "DIVISION DEL NORTE PACIFICO",
            "GRAN SUR",
            "MIGUEL ANGEL DE QUEVEDO",
            "MIRAMONTES",
            "PERISUR",
            "SAN LUCAS COYOACAN",
            "UNIVERSIDAD COPILCO"
          ]
        },
        "UNIVERSIDAD COPILCO": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ARCOS BOSQUES",
            "CUAJIMALPA",
            "EUROCENTER SANTA FE",
            "PABELLÓN BOSQUES",
            "SANTA FE"
          ],
        },
        "GUSTAVO A. MADERO": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "LINDAVISTA",
            "PARQUE LINDAVISTA",
            "SAN JUAN DE ARAGON",
            "VILLA CONSULADO"
          ],
        },
        IZTACALCO: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "GRANJAS MÉXICO"
          ],
        },
        IZTAPALAPA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ALTA TENSION",
            "LA VIGA CHURUBUSCO",
            "PARQUE TEZONTLE",
            "PLAZA ERMITA",
            "TAXQUEÑA Culhuacan",
            "TLAHUAC"
          ],
        },
        TLALPAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "CLUB DE GOLF MÉXICO",
            "INSURGENTES LA JOYA",
            "JARDINES DE LA MONTAÑA",
            "PASEO ACOXPA",
            "TLALPAN SAN FERNANDO",
            "TLALPÁN SUR",
            "VILLA COAPA"
          ],
        },
        "GOBIERNO DE LA CIUDAD DE MÉXICO": {
          BBVA: [], CITI:[], MOVISTAR:[
            "(909MCA05) PORTAL CHURUBUSCO",
            "(909MCA09) SMART STORE GALERIAS DE LAS ESTRELLAS",
            "(909MCA11) PLAZA MOVISTAR PABELLON DEL VALLE",
            "(909MCA22) ISLA REFORMA 222",
            "(909TND02) CAC SANTA FE",
            "(909TND03) CAC INSURGENTES",
            "(909TND10) CAC TEZONTLE",
            "(909TND11) CAC ACOXPA",
            "(909TND15) CAC BUENAVISTA",
            "(909TND17) MINI CAC INSURGENTES II",
            "(909TND18) SMART STORE SANTA FE II",
            "(909TND21) PLAZA TLATELOLCO",
            "(909TND29) LAS AGUILAS ALVARO OBREGON",
            "(909TYO09) GRAN SUR",
            "(909TND31) MINI CAC PATIO REVOLUCIÓN",
            "(915MCA36) PORTAL SAN ANGEL"
          ],
          SCOTIABANK:[],
        },
        "CIUDAD DE MÉXICO": {
          BBVA: [], CITI:[], MOVISTAR:[
            "(909BOD02) BODEGAS SAN BARTOLO Y SANCTORUM",
            "(915MCA34) PARQUE VIA VALLEJO"
          ],
          SCOTIABANK:[],
        },
      },
      Durango: { },
      Guanajuato: { },
      Jalisco: { },
      "Estado de México": {
        "COACALCO DE BERRIOZABAL": {
          BBVA: [],
          CITI:[],
          MOVISTAR:[
            "(915TND16) PLAZA COACALCO",
            "(915MCA19) SMART STORE PLAZA COSMOPOL",
            "(915TND01) CAC COACALCO"
          ], SCOTIABANK:[]
        },
        Lerma:{
          BBVA: [], CITI:[],
          MOVISTAR:["(915TND07) OUTLET LERMA"], SCOTIABANK:[]
        },
        Huixquilucan: {
          BBVA: [], CITI:[],
          MOVISTAR:["(915TND09) CAC INTERLOMAS"], SCOTIABANK:[]
        },
        "Naucalpan de Juarez": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915TND27) LAS TIENDAS DE SAN ESTEBAN"], SCOTIABANK:[]
        },
        "Tlalnepantla de Baz": {
          BBVA: [], CITI:[],
          MOVISTAR:["(09-03385) MSC TLALNEPANTLA"], SCOTIABANK:[]
        },
        "ECATEPEC DE MORELOS": {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(915MCA15) SMART STORE LAS AMERICAS",
            "(915MCA32) PATIO ECATEPEC",
            "(915TND03) CAC ARAGON",
            "(915TND24) MULTIPLAZA ARAGON"
          ], SCOTIABANK:[]
        },
        "CHALCO": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915MCA31) PLAZA CENTRO CHALCO"], SCOTIABANK:[]
        },
        "HUEHUETOCA": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915MCA33) PLAZA CAÑADA HUEHUETOCA"], SCOTIABANK:[]
        },
        "TECAMAC": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915TND05) MINI CAC TECAMAC"], SCOTIABANK:[]
        },
        "METEPEC": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915TYO01) CAC METEPE", "(915TND28) TOWN SQUARE METEPEC"], SCOTIABANK:[]
        },
        "ZUMPANGO": {
          BBVA: [], CITI:[],
          MOVISTAR:["(915MCA40) ZUMPANGO"], SCOTIABANK:[]
        }
      },
      Michoacan: { },
      "Nuevo Leon": {
        GARCÍA: {
          BBVA: [],
          CITI:[],
          MOVISTAR:[
            "(419TND17) PLAZOLETA GARCIA"
          ],
          SCOTIABANK:[]
        },
        GUADALUPE: {
          BBVA: [],
          CITI:[
            "(18405) (348) SUC. MADERO ORIENTE",
            "(19399) (4511) SUC. EXPO GUADALUPE",
            "(19400) (4508) SUC. PASEO DE LAS AMERICAS",
            "(19401) (4329) SUC. NUEVA LINDA VISTA",
            "(26973) (420) SUC. PABLO LIVAS",
            "(26991) (770) SUC. ACAPULCO",
            "(36971) (7499) SUC. SANTA CRUZ"
          ],
          MOVISTAR:[
            "(419TND21) MULTIPLAZA LINDAVISTA GUADALUPE",
            "(419TND26) MINICAC SUN MALL VIP VILLA DE  JUAREZ"
          ],
          SCOTIABANK:["CONTRY", "GUADALUPE CENTRO", "LINDAVISTA", "PLAZA SANTA MARÍA", "RUIZ CORTINES"]
        },
        MONTERREY: {
          BBVA: [],
          CITI:[
            "(18406) (795) SUC. GONZALITOS",
            "(18407) (117) SUC. MONTERREY 400",
            "(18412) (867) SUC. REVOLUCION",
            "(18414) (973) SUC. GARZA SADA",
            "(18419) (4165) SUC. PASEO DE LOS LEONES",
            "(18420) (186) SUC. PINO SUAREZ (REUB)",
            "(18421) (279) SUC. CUMBRES (REUB)",
            "(18422) (4467) SUC. FELIX U. GOMEZ",
            "(18423) (4330) SUC. LINCOLN",
            "(18424) (4328) SUC. FIDEL VELAZQUEZ",
            "(18425) (969) SUC. BRISAS (REUB)",
            "(18439) (4868) SUC. HEROES CITI",
            "(19386) (4072) SUC. S CUMBRES (REUBICACION)",
            "(19413) (4662) SUC. CHAPULTEPEC",
            "(26606) (768) SUC. SATELITE",
            "(26607) (784) SUC. MITRAS",
            "(26994) (300) SUC. SIMON BOLIVAR",
            "(29087) (4757) SUC. MACROPLAZA REUB.",
            "(36774) (7492) SUC. SENDERO LINCOLN",
            "(45369) (7931) SUC. TORRE CIVICA",
            "(51298) (6579) SUC. BUENOS AIRES",
            "(51299) (6609) SUC. PLAZA REAL MTY",
            "(51383) (6578) SUC. PLAZA ADANA",
            "(51788) (6616) SUC. PASEO TEC",
            "(51792) (6608) SUC. MULTIPLAZA LINCOLN",
            "(52924) (6912) SUC. FUNDADORES 14",
            "(53999) (5472) SUC. VALLE ALTO",
            "(54004) (5470) SUC. PLAZA QU",
            "(55803) (621) SUC. OBISPADO (REUB)",
            "(56381) (8840) EDIF. PASEO DE LOS LEONES 100",
            "(56990) (4105) SUC. SAN JERONIMO COLINAS R.",
            "(57163) (8792) SUC. PLAZA SERENA",
            "(57925) (0) EDIF. CITICA",
          ],
          MOVISTAR:[
            "(19-00105) JIMENEZ - CANAL 6 - PEGASO",
            "(419MCA12) ISLA SENDERO LINCOLN",
            "(419MCA20) SMART STORE NUEVO SUR",
            "(419MCA22) SMART STORE PLAZA ANTALYA",
            "(419TND19) ALAMEDA MONTERREY",
            "(419TND20) PASEO PUNTO PONIENTE",
            "(419TDN28) ALTEA LINCOLN MONTERREY",
            "(419TND30) PATIO LINCOLN",
            "(419TND32) PASEO TEC",
            "(419MCA29) MINI CAC CENTRIKA MONTERREY",
            "(419TND03) CAC GALERIAS",
            "(419TND06) CAC CUMBRES",
            "(419MCA25) PLAZA MOVISTAR PLAZA REAL MONTERREY"
          ],
          SCOTIABANK:[
            "ANILLO SAN JERÓNIMO",
            "COLINAS PONIENTE",
            "CUMBRES",
            "GALERÍAS",
            "LEONES",
            "Madero Oriente",
            "MITRAS",
            "PADRE MIER",
            "PASEO LA RIOJA",
            "NUEVO SUR",
            "TECNOLÓGICO DE MONTERREY",
          ]
        },
        "SAN PEDRO GARZA GARCIA": {
          BBVA: [],
          CITI:[
            "(18494) (87) SUC. VALLE/EDIF.",
            "(18495) (861) SUC. SAN PEDRO/EDIF.",
            "(18497) (4194) SUC. SAN AGUSTIN",
            "(18508) (4876) SUC. VASCONCELOS CITI",
            "(28899) (831) SUC. GOMEZ MORIN",
            "(29089) (4864) SUC. VALLE OTE.",
            "(32913) (4068) SUC. CENTRITO",
            "(52188) (6876) SUC. DUENDES",
            "(53994) (5471) SUC. UDEM",
            "(57164) (8826) SUC. CHROMA"
          ],
          MOVISTAR:[
            "(419MYC01) OFICINA REGIONAL MONTERREY",
            "(19-02228) MSC SEMINARIO",
            "(419MCA02) CAC PLAZA FIESTA SAN AGUSTIN",
            "(419MCA21) SMART STORE SORIANA SAN PEDRO",
            "(419TND27) MINI CAC PLAZA FIESTA SAN AGUSTIN SAN PEDRO"
          ],
          SCOTIABANK:[
            "CALZADA DEL VALLE",
            "CHIPINQUE",
            "CORPORATIVO MONTERREY",
            "PLAZA CUMBRES",
            "PUNTO VALLE",
            "SAN AGUSTÍN",
            "VASCONCELOS"
          ]
        },
        "SAN NICOLAS DE LOS GARZA": {
          BBVA: [],
          CITI:[
            "(18514) (988) SUC. IND. CONDUCTORES",
            "(18518) (4092) SUC. MANUEL BARRAGAN",
            "(18527) (4468) SUC. DIEGO DIAZ DE BERLANGA",
            "(33003) (374) SUC. LAS PUENTES",
            "(33638) (7403) SUC. CENTRO SAN NICOLAS",
            "(34292) (4618) SUC. LA FE (REUB.)",
            "(45410) (6440) SUC. ABASTOS ESTRELLA",
            "(56902) (557) SUC. SAN NICOLAS/EDIF",
            "(57092) (8721) SUC. PASEO LA FE"
          ],
          MOVISTAR:[
            "(419MCA01) CAC PLAZA FIESTA ANAHUAC",
            "(419TND08) CAC LA FE MONTERREY",
            "(419TND15) PASEO LA FE NUEVO LEON",
            "(419TND25) SANTO DOMINGO"],
          SCOTIABANK:[
            "MANUEL BARRAGAN",
            "UNIVERSIDAD"
          ]
        },
        MONTEMORELOS: {
          BBVA: [],
          CITI:["(19396) (554) SUC. MONTEMORELOS"],
          MOVISTAR:[],
          SCOTIABANK:["MONTEMORELOS"]
        },
        LINARES: {
          BBVA: [],
          CITI:["(19398) (796) SUC. LINARES"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "CADEREYTA JIMENEZ": {
          BBVA: [],
          CITI:[
            "(19443) (417) SUC. CADEREYTA",
            "(19444) (4485) SUC. SEC PEMEX CADEREYTA"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APODACA: {
          BBVA: [],
          CITI:[
            "(19460) (4477) SUC. APODACA",
            "(19463) (4800) SUC. SEC CELESTICA",
            "(27054) (4073) SUC. S LOS FRESNOS",
            "(36963) (7501) SUC. HUINALA",
            "(40010) (7404) SUC. SENDERO APODACA",
            "(45990) (0) EDIF. SALON BEYOND MTY",
            "(51418) (6610) SUC. AEROPUERTO MONTERREY",
            "(56490) (8021) SUC. SEC SCHNEIDER"
          ],
          MOVISTAR:[],
          SCOTIABANK:["APODACA"]
        },
        ALLENDE: {
          BBVA: [],
          CITI:["(19471) (439) SUC. ALLENDE"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        SANTIAGO: {
          BBVA: [],
          CITI:["(19475) (4809) SUC. CERCADO"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "GENERAL ESCOBEDO": {
          BBVA: [],
          CITI:[
            "(26603) (842) SUC. ESCOBEDO",
            "(51790) (6615) SUC. VILLAS ESCOBEDO",
            "(51791) (6617) SUC. PASEO SENDERO"
          ],
          MOVISTAR:[
            "(419TND16) RAUL SALINAS",
            "(614TND33) SENDERO ESCOBEDO"
          ], SCOTIABANK:[]
        },
        "SANTA CATARINA": {
          BBVA: [],
          CITI:[
            "(19478) (4270) SUC. LA FAMA",
            "(26978) (901) SUC. SANTA CATARINA",
            "(38021) (7496) SUC. LA PUERTA 2"
          ],
          MOVISTAR:[
            "(419TND07) CAC SANTA CATARINA"
          ],
          SCOTIABANK:["PASEO LA HUASTECA"]
        },
        PESQUERIA: {
          BBVA: [],
          CITI:[
            "(55745) (6332) SUC. SEC KIA MONTERREY"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "SALINAS VICTORIA": {
          BBVA: [],
          CITI:[],
          MOVISTAR:[
            "(419MCA27) SMART STORE SUN MALL MONTERREY"
          ],
          SCOTIABANK:[]
        }
      },
      Hidalgo: {
        "TULANCINGO DE BRAVO": {
          BBVA: [],
          CITI:["(20255) (162) SUC. TULANCINGO", "(26793) (4221) SUC. JARDINES DE TULANCINGO"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "TULA DE ALLENDE": {
          BBVA: [],
          CITI:["(20264) (12) SUC. TULA", "(20266) (4502) SUC. PEMEX TULA"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TIZAYUCA:{
          BBVA: [],
          CITI:["(20271) (985) SUC. TIZAYUCA"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        Tepeapulco: {
          BBVA: [],
          CITI:["(20275) (4464) SUC. CD SAHAGUN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PROGRESO DE OBREGON": {
          BBVA: [],
          CITI:["(20276) (463) SUC. PROGRESO DE OBREGON /ATM"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PACHUCA DE SOTO": {
          BBVA: [],
          CITI:[
            "(20278) (4782) SUC. SAN JAVIER CITI",
            "(20279) (693) SUC. MADERO HIDALGO",
            "(20282) (4558) SUC. SEPH",
            "(20284) (4867) SUC. PACHUCA MADERO CITI",
            "(20302) (827) SUC. FELIPE ANGELES/EDIF",
            "(20303) (122) SUC. PACHUCA/EDIF",
            "(26797) (949) SUC. GALERIAS PACHUCA",
            "(28719) (4375) SUC. TULIPANES PACHUCA",
            "(33043) (7398) SUC. GOBIERNO DE HIDALGO",
            "(40890) (9639) SUC. GRAN PATIO PACHUCA",
            "(42414) (0) EDIF. JUAREZ 1105",
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        IXMIQUILPAN: {
          BBVA: [],
          CITI:["(20308) (487) SUC. IXMIQUILPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        HUICHAPAN: {
          BBVA: [],
          CITI:["(20309) (461) SUC. HUICHAPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "HUEJUTLA DE REYES": {
          BBVA: [],
          CITI:["(20312) (12) SUC. HUEJUTLA"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "ATOTONILCO EL GRANDE": {
          BBVA: [],
          CITI:["(20314) (730) SUC. ATOTONILCO"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APAN: {
          BBVA: [],
          CITI:["(20317) (853) SUC. APAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        ACTOPAN: {
          BBVA: [],
          CITI:["(20318) (455) SUC. ACTOPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TLAXCOAPAN: {
          BBVA: [],
          CITI:["(26824) (4503) SUC. TLAXCOAPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "TEPEJI DEL RIO DE OCAMPO": {
          BBVA: [],
          CITI:["(35150) (7470) SUC. TEPEJI DEL RIO"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TECOZAUTLA: {
          BBVA: [],
          CITI:["(46131) (6497) SUC. TECOZAUTLA"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Morelos: {
        Yautepec: {
          BBVA: [],
          CITI:["(17834) (4417) SUC. OAXTEPEC"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PUENTE DE IXTLA": {
          BBVA: [],
          CITI:["(17839) (4774) SUC. PUENTE DE IXTLA CITI"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        JOJUTLA: {
          BBVA: [],
          CITI:["(17841) (4448) SUC. ANTIGUA ESTACION"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CUERNAVACA: {
          BBVA: [],
          CITI: [
            "(17842) (4466) SUC. BAXTER",
            "(17848) (0) EDIF. MOTOLINIA",
            "(17849) (107) SUC. CUERNAVACA/EDIF.",
            "(17850) (500) SUC. CIVAC",
            "(17853) (694) SUC. VISTA HERMOSA",
            "(17854) (997) SUC. CASA BLANCA",
            "(17855) (4097) SUC. BUENAVISTA",
            "(17862) (4735) SUC. LAS PALMAS CITI",
            "(17863) (4705) SUC. ACAPATZINGO CITI",
            "(17865) (4767) SUC. LA LUNA",
            "(17868) (443) SUC. YAUTEPEC",
            "(17869) (773) SUC. TEMIXCO",
            "(26519) (786) SUC. GALERIAS LIVERPOOL",
            "(50233) (6902) SUC. RIO MAYO / EDIF.",
            "(56958) (8830) SUC. AVERANDA"
          ],
          MOVISTAR:[
            "(915MCA35) DDD 1000 CUERNAVACA",
            "(917MCA08) AVERANDA CUERNAVACA",
            "(917TND03) FORUM CUERNAVACA",
            "(917TYO01) CAC CUERNAVACA"
          ], SCOTIABANK:[]
        },
        JIUTEPEC: {
          BBVA: [],
          CITI:[ "(17843) (4456) SUC. JIUTEPEC", "(36972) (8178) SUC. MODULO NISSAN" ],
          MOVISTAR:["(917MCA06) CAC JUITEPEC MORELOS"], SCOTIABANK:[]
        },
        CUAUTLA: {
          BBVA: [],
          CITI:[
            "(18938) (150) SUC. CUAUTLA / EDIF.",
            "(18939) (669) SUC. MANANTIALES",
            "(37361) (9030) SUC. PLAZA LOS ARCOS CUAUTLA",
          ],
          MOVISTAR:["(917MCA02) MINI CAC PLAZA ATRIOS", "(917TND01) MINI CAC CUAUTLA"],
          SCOTIABANK:[]
        },
        HIDALGO: {
          BBVA: [],
          CITI:[ "(29115) (4394) SUC. ZACATEPEC MORELOS", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        XOCHITEPEC: {
          BBVA: [],
          CITI:[ "(46161) (6496) SUC. XOCHITEPEC", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        YECAPIXTLA: {
          BBVA: [],
          CITI:[ "(47889) (4729) SUC. SEC BURLINGTON", ],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Oaxaca: { },
      Puebla: {
        "SAN PEDRO CHOLULA": {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(821TND12) EXPLANADA PUEBLA",
            "(821MCA01) MINI CAC SAN ANDRES CHOLULA",
            "(821MCA08) VIA SAN ANGEL"
          ],
          SCOTIABANK:["CHOLULA"]
        },
        CUAUTLANCINGO: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["CRUZ DEL SUR"]
        },
        PUEBLA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ANGELOPOLIS",
            "ANZURES",
            "CATEDRAL",
            "CHULAVISTA",
            "ESMERALDA",
            "INDUSTRIAL 2000 (REUBICACIÓN)",
            "LA PAZ",
            "PLAZA DORADA",
            "PLAZA LAS ANIMAS",
            "VALSEQUILLO",
            "ZAVALETA",
            "BANCA PRIVADA  TRIÁNGULO",
          ]
        },
        "SAN ANDRES CHOLULA": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["BLVD ATLIXCAYOTL"]
        },
        TEHUACAN: {
          BBVA: [], CITI:[], MOVISTAR:["(821MCA05) CAC EL PASEO TEHUACAN"],
          SCOTIABANK:["PASEO TEHUACÁN", "TEHUACÁN"]
        }
      },
      Queretaro: {
        Queretaro: {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(722MCA12) BENITO JUAREZ SUR QUERETARO",
            "(722MCA15) CAC PASEO QUERETARO",
            "(722TYO01) CAC QUERETARO",
            "(722MCA03) MINI CAC PLAZA REVOLUCION",
            "(722MCA13) PLAZA PATIO QUERETARO",
            "(722TND02) CAC QUERETARO UNIVERSIDAD",
            "(722TND03) ANTEA QUERETARO",
            "(722TND06) LA CAPILLA QUERETARO",
            "(722TND14) PLAZA UBIKA UNIVERSIDAD"
          ],
          SCOTIABANK:[]
        },
        CORREGIDORA: {
          BBVA: [], CITI:[],
          MOVISTAR:["(722MCA01) MINI CAC CONSTITUYENTES"],
          SCOTIABANK:[]
        }
      },
      Sinaloa: {
        AHOME: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["LOS MOCHIS", "RÍO FUERTE"]
        },
        CULIACAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "CABALLITO",
            "COUNTRY CLUB  MÓDULO",
            "GUADALUPE-CULIACÁN",
            "LAS QUINTAS",
            "MONTEBELLO",
            "TRES RÍOS"
          ]
        },
        MAZATLAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "EL TOREO MAZATLÁN", "MAZATLÁN" ]
        },
        GUASAVE: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "GUASAVE" ]
        },
        "SALVADOR ALVARADO": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "GUAMUCHIL" ]
        }
      },
      Sonora: { },
      Tamaulipas: {
        "EL MANTE": {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(428TND01) MINI CAC CD MANTE"
          ],
          SCOTIABANK:[]
        },
        REYNOSA: {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(428COR01) OFC REYNOSA",
            "(28-02341) REYNOSA TELMEX",
            "(428TND02) CAC REYNOSA PERIFERICO",
            "(428TYO05) CAC REYNOSA"
          ],
          SCOTIABANK:[]
        },
        MATAMOROS: {
          BBVA: [], CITI:[],
          MOVISTAR:[ "(428TYO04) CAC MATAMOROS", "(28-02350) MSC MATAMOROS" ],
          SCOTIABANK:[]
        },
        "NUEVO LAREDO": {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(28-02381) LAREDO SWITCH",
            "(428TYO06) CAC NUEVO LAREDO"
          ],
          SCOTIABANK:[]
        }
      },
      Veracruz: {
        Coatzacoalcos: {
          BBVA: [], CITI:[],
          MOVISTAR:["(30-03314) ÚRSULO GALVÁN"],
          SCOTIABANK:[]
        },
        "Poza Rica de Hidalgo": {
          BBVA: [], CITI:[],
          MOVISTAR:["(30-03566) BENITO JUAREZ"],
          SCOTIABANK:[]
        }
      },
      Yucatan: {
        MERIDA: {
          BBVA: [], CITI:[], MOVISTAR:[
            "(531MCA06) MINI CAC PLAZA DORADA",
            "(531TYO02) CAC MERIDA",
            "(31-03051) MSC MERIDA"
          ],
          SCOTIABANK:[
            "ALTABRISA",
            "CAMPESTRE",
            "CENTRO MÉRIDA",
            "FRANCISCO DE MONTEJO",
            "GALERÍAS MÉRIDA",
            "JARDÍNES DE MÉRIDA",
            "MONTECRISTO",
            "PASEO MONTEJO",
            "PLAZA LAS AMÉRICAS"
          ]
        }
      },
      "": { "": { BBVA: [], CITI:[], MOVISTAR:[], SCOTIABANK:[] } },
    },
  } },
  watch: {
    sucursal() { this.renombramientoMostrado() }
  },
  methods: {
    //Almacenamiento de datos seleccionados del formulario y habilita forms
    setCliente(value) { this.cliente = value },
    setPCI(value) { this.pci = value },
    setTipo(value) { this.tipo = value },
    setProyecto(value) { this.proyecto = value },
    setPDF(value) { this.pdf = value },
    setXML(value) { this.xml = value },
    setSucursal(value) { this.sucursal = value },
    setRegla(value) { this.regla = value; },
    setRenombramiento(value) { this.renombramiento = value; },
    setBackRenombramiento(value) { this.renombramiento = value; return value; },

    reset() { this.$refs.selTipo.resetValue() },

    anoActual(){
      var objetoFecha = new Date();
      return ''+objetoFecha.getFullYear();
    },
    fechaActual() {
      var objetoFecha = new Date();
      var ano = objetoFecha.getFullYear();
      var mes = (objetoFecha.getMonth() + 1) < 10 ? '0' + (objetoFecha.getMonth() + 1) : (objetoFecha.getMonth() + 1);
      var dia = objetoFecha.getDate() < 10 ? '0' + objetoFecha.getDate() : objetoFecha.getDate();
      return ano + '' + mes + '' + dia;
    },
    //Renombra y descarga los archivos
    descargar() {
      if(this.validationError()) {
        this.correct = false
        if (this.tipo === 'FACTURA') {
          this.descarcarArchivo(this.pdf, this.renombramiento);
          this.descarcarArchivo(this.xml, this.renombramiento);
        }
        else this.descarcarArchivo(this.pdf, this.renombramiento)
      }
      else{ this.correct = true }
    },
    validationError(){
      let regExp = /OTRO/g
      let valor = regExp.test(this.renombramiento)
      console.log(valor)
      if(valor){ this.textValidation='Corriga de manera manual el nombre para poder descargarlo'; return false; }
      else {
        regExp = /----------/g
        valor = regExp.test(this.renombramiento)
        if(valor){ this.textValidation='Llene todos los campos del formulario para poder renombrar el archivo o hagalo manualmente'; return false; }
        else {
          if(this.renombramiento.trim() === ''){ this.textValidation='No puede dejar el nombre vacio'; return false; }
          else this.textValidation=''; return true;
        }
      }
    },
    confirmError(){ this.correct=false },
    descarcarArchivo(archivo, nombre) {
      const extension = archivo.files[0].name.split(".")[1];
      //renombrar archivo
      const nuevoNombre = nombre + '.' + extension;
      const blob = new Blob([archivo.files[0]], { type: archivo.files[0].type, });
      const href = URL.createObjectURL(blob);
      const a = Object.assign(document.createElement("a"), { href, style: "display:none", download: nuevoNombre, });
      document.body.appendChild(a);
      // descargar archivo
      a.click();
      URL.revokeObjectURL(href);
      a.remove();
    },
    //Expreciones regulares para encontrar nombres y claves
    claveSIRH(sucursal){
      //Encuentra los primeros parentesis
      let regExp = /\(([^)]+)\)/g
      return regExp.exec(sucursal)[1]
    },
    claveBC(sucursal){
      //Encuentra los primeros parentesis
      let regExp = /\(([^)]+)\)/
      //Los elimina
      sucursal = sucursal.replace(regExp,"")
      //Encuentra los primeros parentesis despues de eliminar los primeros
      return regExp.exec(sucursal)[1]
    },
    claveSucursal(sucursal) {
      //Encuentra lo que esta entre parentesis y elimina los parentesis
      /*
        let regExp = /[^(].*(?=\))/ 
        return regExp.exec(sucursal)[0];
      */
      //Primero encuentra la clave que esta en parentesis
      let regExp = /\(.*\)/
      //Elimina los parentesis
      let entreParentesis = regExp.exec(sucursal)[0];
      entreParentesis = entreParentesis.replace(/\(/, "");
      entreParentesis = entreParentesis.replace(/\)/, "");
      return entreParentesis
    },
    nombreSucursal(sucursal) {
      //Remplaza los todo lo que esta entre parentesis con espacio en blanco
      //y elimina el espacio en blanco del inicio y final
      //console.log(sucursal.replace(/\(.*\)/, ''))
      //console.log(sucursal.replace(/\(.*\)/, '').replace(/^\s*/, ''))
      //console.log(sucursal.replace(/\(.*\)/, '').replace(/\s*$/, ''))
      //console.log(sucursal.replace(/\(.*\)/, '').replace(/^\s*/, '').replace(/\s*$/, ''))
      return sucursal.replace(/\(.*\)/, '').replace(/^\s*/, '').replace(/\s*$/, '');
    },
    verificarClaveBBVA(clave) {
      //solo considera si la clave tiene 3 digitos
      if (clave.length < 4) { return '0' + clave }
      else { return clave }
    },

    antesOTRO(){},
    despuesOTRO(){},
    otro(){},

    renombramientoMostrado() {
      if (this.sucursal) {
        switch (this.regla) {
          case 'BBVA-SI': this.setRenombramiento(
              this.fechaActual() + ' '
              + this.proyecto + ' '
              + 'CR' + ' ' + this.verificarClaveBBVA(this.claveSucursal(this.sucursal)) + ' '
              + this.nombreSucursal(this.sucursal)
            );
            break;

          case 'BBVA-NO-LI': this.setRenombramiento(
              'CR' + ' '
              + this.claveSucursal(this.sucursal) + ' '
              + this.proyecto
            ); 
            break;

          case 'BBVA-NO-FA': this.setRenombramiento(
              'CR' + ' '
              + this.claveSucursal(this.sucursal) + ' '
              + 'FOLIO' + ' '
              + this.folio
            ); 
            break;

          case 'MOVISTAR-SI': this.setRenombramiento(
              this.claveSucursal(this.sucursal) + ' '
              + this.proyecto + ' '
              + this.nombreSucursal(this.sucursal)
            ); 
            break;

          case 'MOVISTAR-NO-LI': this.setRenombramiento(
              this.claveSucursal(this.sucursal) + ' '
              + this.proyecto + ' '
              + this.nombreSucursal(this.sucursal)
            ); 
            break;

          case 'MOVISTAR-NO-FA': this.setRenombramiento(
              this.claveSucursal(this.sucursal) + ' '
              + this.tipo + ' '
              + this.proyecto + ' '
              + this.nombreSucursal(this.sucursal)
            ); 
            break;

          case 'CITI-SI': this.setRenombramiento(
              this.claveSIRH(this.sucursal)+'-'
              +this.claveBC(this.sucursal)+'-'
              +this.proyecto+'-'
              +this.nombreSucursal(this.sucursal)+'-'
              +this.anoActual()
            ); 
            break;

          case 'CITI-NO-LI': this.setRenombramiento(
              this.claveSIRH(this.sucursal)+'-'
              +this.claveBC(this.sucursal)+'-'
              +this.proyecto+'-'
              +this.nombreSucursal(this.sucursal)+'-'
              +this.anoActual()
            ); 
            break;
          case 'CITI-NO-FA': this.setRenombramiento(
              this.claveSIRH(this.sucursal)+'-'
              +this.claveBC(this.sucursal)+'-'
              +this.proyecto+'-'
              +this.nombreSucursal(this.sucursal)+'-'
              +this.anoActual()
            ); 
            break;
          default: this.setRenombramiento('----------'); break;
        }
      }
      else { this.setRenombramiento('----------'); }
    },
  },
  computed: {
    //Clase y texto dinamico de archivos
    clasePDF() {
      if (this.pdf) { return true; }
      else { return false; }
    },
    claseXML() {
      if (this.xml) { return true; }
      else { return false; }
    },
    textoPDF() { return this.pdf ? this.pdf.files[0].name : 'Archivo PDF' },
    textoXML() { return this.xml ? this.xml.files[0].name : 'Archivo XML' },
    //Nos regresa el listado de proyectos
    opcionesProyecto() {
      if(this.regla === 'MOVISTAR-SI') { return this.listaProyectosPCIMovistar }
      else if(this.regla === 'CITI-SI' || this.regla === 'CITI-NO-FA' || this.regla === 'CITI-NO-LI') { 
        //return this.listaProyectosPCIMovistar
        return this.listaProyectosPCICitibanamex 
      }
      else return this.listaProyectos
    },
    //Habilita los formularios
    showPCI() {
      if (this.cliente) { return false; }
      else return true;
    },
    showTipo() {
      if (this.pci) { return false; }
      else return true;
    },
    showArchivos() {
      if (this.tipo) { return false; }
      else return true;
    },
    showProyecto() {
      /* if (this.cliente === 'BBVA' && this.pci === 'No' && this.tipo === 'Factura') { return true;} */
      if (this.tipo === 'LICENCIA') {
        if (this.pdf) { return false; }
        else return true;
      }
      else if (this.tipo === 'FACTURA') {
        if (this.pdf && this.xml) { return false; }
        else return true;
      }
      else return true;
    },  
    showSucursal() {
      if (this.tipo === 'LICENCIA') {
        if (this.pdf) { return false; }
        else return true;
      }
      else if (this.tipo === 'FACTURA') {
        if (this.pdf && this.xml) { return false; }
        else return true;
      }
      else return true;
    },
    //Nos muestra la regla que estamos utilizando
    reglaUtilizada() {
      switch (this.cliente) {
        case 'BBVA':
          if (this.pci === 'Si') { this.setRegla('BBVA-SI'); return 'FECHA_NOMBRE DEL PROYECTO_CR 0000_NOMBRRE DE LA SUCURSAL' }
          if (this.pci === 'No') {
            if (this.tipo === 'LICENCIA') { this.setRegla('BBVA-NO-LI'); return 'CR Clave del inmueble_NOMBRE DEL PROYECTO' }
            if (this.tipo === 'FACTURA') { this.setRegla('BBVA-NO-FA'); return 'CR Clave del inmueble_Folio Numeración individual del documento' }
            else return '';
          } 
          else return '';

        case 'MOVISTAR':
          if (this.pci === 'Si') { this.setRegla('MOVISTAR-SI'); return 'Clave del inmueble_ABREVIATURA DEL PROYECTO_NOMBRE DE LA SUCURSAL' }
          if (this.pci === 'No') {
            if (this.tipo === 'LICENCIA') { this.setRegla('MOVISTAR-NO-LI'); return 'Clave del inmueble_NOMBRE DEL PROYECTO_NOMBRE DE LA SUCURSAL' }
            if (this.tipo === 'FACTURA') { this.setRegla('MOVISTAR-NO-FA'); return 'Clave del inmueble_NOMBRE DEL PROYECTO_NOMBRE DE LA SUCURSAL' }
            else return '';
          }
          else return '';

        case 'CITI':
          if (this.pci === 'Si') { this.setRegla('CITI-SI'); return 'SIRH-BC-ABREVIATURA DE PROYECTO-NOMBRE DE SUCURSAL-AÑO' }
          if (this.pci === 'No') {
            if (this.tipo === 'LICENCIA') { this.setRegla('CITI-NO-LI'); return 'SIRH-BC-ABREVIATURA DE PROYECTO-NOMBRE DE SUCURSAL-AÑO' }
            if (this.tipo === 'FACTURA') { this.setRegla('CITI-NO-FA'); return 'SIRH-BC-ABREVIATURA DE PROYECTO-NOMBRE DE SUCURSAL-AÑO' }
            else return '';
          }
          else return '';

        default: return '';
      }
    },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;700&display=swap");

:root {
  --primario: #156ab1;
  --primarioOscuro: #0f5186;
  --secundario: #71c7f0;
  --secundarioOscuro: #2184b3;
  --blanco: #FFF;
  --negro: #000;
  --fuentePrincipal: 'Inconsolata', monospace;
}

/* Globales */
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/* Hack para box model **/
body {
  font-size: 1.6rem;
  /* 1rem = 10px */
  font-family: var(--fuentePrincipal);
  font-weight: 700;
}

h1,
h2,
h3 {
  text-align: center;
}

/*header*/
.header {
  margin: 0 0 3rem 0;
}

.header h1 {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .header {
    margin: 3rem;
  }

  .header h1 {
    font-size: 3rem
  }
}

/*main*/
.main {
  max-width: 80rem;
  margin: 0 auto;
}

.main_elemento {
  margin: 1rem 0.5rem;
}

@media (min-width: 1280px) {}

/*Para el componente BaseSelect,SelectorPCI,FormUbicacion y agrupamiento lineal*/
.contenedor {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}

.contenedor p {
  margin: 0;
}

/*Para componente BaseShow*/
.contenedor_block {
  text-align: center;
}

.contenedor_block p {
  margin: 0;
}

@media (min-width: 768px) {
  .contenedor_block {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
}

/*Para el selector de archivos*/
.archivos {
  padding: 0.5rem;
  position: relative;
  width: 100%;
  cursor: pointer;
}

.archivos--seleccionado {
  color: white;
  background-color: var(--secundario);
  border: 0.2rem solid var(--secundarioOscuro);
}

.archivos input {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.archivos p {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/*Para la entrada manual*/
.manual_input {
  width: 100%;
}

.not_able {
  pointer-events: none;
  color: #AAA;
  background-color: #F5F5F5;
  border-color: #F5F5F5;
}
</style>