// Base de datos de aeródromos por FIR en Argentina
const AIRPORT_DATABASE = {
  "FIR EZEIZA": [
    { oaci: "SABE", wmo: "87582", name: "AEROPARQUE J. NEWBERY", city: "Buenos Aires" },
    { oaci: "SAEZ", wmo: "87576", name: "EZEIZA INTERNACIONAL", city: "Buenos Aires" },
    { oaci: "SAZM", wmo: "87692", name: "MAR DEL PLATA", city: "Mar del Plata" },
    { oaci: "SAZS", wmo: "87765", name: "BARILOCHE", city: "Bariloche" },
    { oaci: "SAZN", wmo: "87715", name: "NEUQUEN", city: "Neuquén" },
    { oaci: "SAAR", wmo: "87480", name: "ROSARIO", city: "Rosario" },
    { oaci: "SAAP", wmo: "87374", name: "PARANA", city: "Paraná" },
    { oaci: "SAAV", wmo: "87371", name: "SAUCE VIEJO", city: "Santa Fe" },
    { oaci: "SAZB", wmo: "87750", name: "BAHIA BLANCA", city: "Bahía Blanca" },
    { oaci: "SAZY", wmo: "87761", name: "CHAPELCO", city: "San Martín de los Andes" },
    { oaci: "SAZT", wmo: "87645", name: "TANDIL", city: "Tandil" },
    { oaci: "SAZA", wmo: "87641", name: "AZUL", city: "Azul" },
    { oaci: "SADP", wmo: "87570", name: "CAMPO DE MAYO", city: "Campo de Mayo" },
    { oaci: "SAOD", wmo: "87395", name: "CONCORDIA", city: "Concordia" },
    { oaci: "SADL", wmo: "87571", name: "EL PALOMAR", city: "El Palomar" },
    { oaci: "SAZG", wmo: "87532", name: "GENERAL PICO", city: "General Pico" },
    { oaci: "SAUG", wmo: "87497", name: "GUALEGUAYCHU", city: "Gualeguaychú" },
    { oaci: "SAAJ", wmo: "87548", name: "JUNIN", city: "Junín" },
    { oaci: "SADJ", wmo: "87572", name: "MARIANO MORENO", city: "José C. Paz" },
    { oaci: "SADM", wmo: "87574", name: "MORON", city: "Morón" },
    { oaci: "SADF", wmo: "87553", name: "SAN FERNANDO", city: "San Fernando" },
    { oaci: "SAZR", wmo: "87623", name: "SANTA ROSA", city: "Santa Rosa" }
  ],
  "FIR CORDOBA": [
    { oaci: "SACO", wmo: "87344", name: "CORDOBA CORONEL OLMEDO", city: "Córdoba" },
    { oaci: "SANT", wmo: "87121", name: "TUCUMAN", city: "Tucumán" },
    { oaci: "SASA", wmo: "87047", name: "SALTA", city: "Salta" },
    { oaci: "SASJ", wmo: "87046", name: "JUJUY", city: "Jujuy" },
    { oaci: "SANC", wmo: "87222", name: "CATAMARCA", city: "Catamarca" },
    { oaci: "SANL", wmo: "87217", name: "LA RIOJA", city: "La Rioja" },
    { oaci: "SANE", 'wmo': "87129", name: "SANTIAGO DEL ESTERO", city: "Santiago del Estero" },
    { oaci: "SAOC", wmo: "87453", name: "RIO CUARTO", city: "Río Cuarto" },
    { oaci: "SACE", wmo: "87347", name: "ESCUELA DE AVIACION", city: "Córdoba" },
    { oaci: "SAOU", wmo: "87444", name: "SANTA ROSA DEL CONLARA", city: "Merlo (San Luis)" },
    { oaci: "SANH", wmo: "87127", name: "TERMAS DE RIO HONDO", city: "Termas de Río Hondo" }
  ],
  "FIR MENDOZA": [
    { oaci: "SAME", wmo: "87418", name: "MENDOZA EL PLUMERILLO", city: "Mendoza" },
    { oaci: "SANU", wmo: "87311", name: "SAN JUAN", city: "San Juan" },
    { oaci: "SAOS", wmo: "87436", name: "SAN LUIS", city: "San Luis" },
    { oaci: "SAMR", wmo: "87509", name: "SAN RAFAEL", city: "San Rafael" },
    { oaci: "SAMM", wmo: "87506", name: "MALARGUE", city: "Malargüe" },
    { oaci: "SAOR", wmo: "87448", name: "VILLA REYNOLDS", city: "Villa Mercedes" }
  ],
  "FIR RESISTENCIA": [
    { oaci: "SARE", wmo: "87155", name: "RESISTENCIA", city: "Resistencia" },
    { oaci: "SARC", wmo: "87166", name: "CORRIENTES", city: "Corrientes" },
    { oaci: "SARF", wmo: "87162", name: "FORMOSA", city: "Formosa" },
    { oaci: "SARI", wmo: "87097", name: "IGUAZU CATARATAS", city: "Puerto Iguazú" },
    { oaci: "SARP", wmo: "87178", name: "POSADAS", city: "Posadas" },
    { oaci: "SARY", wmo: "87270", name: "RECONQUISTA", city: "Reconquista" },
    { oaci: "SARL", wmo: "87289", name: "PASO DE LOS LIBRES", city: "Paso de los Libres" }
  ],
  "FIR C. RIVADAVIA": [
    { oaci: "SAVC", wmo: "87860", name: "COMODORO RIVADAVIA", city: "Comodoro Rivadavia" },
    { oaci: "SAWH", wmo: "87938", name: "USHUAIA INTERNACIONAL", city: "Ushuaia" },
    { oaci: "SAWG", wmo: "87925", name: "RIO GALLEGOS", city: "Río Gallegos" },
    { oaci: "SAWC", wmo: "87904", name: "EL CALAFATE", city: "El Calafate" },
    { oaci: "SAVE", wmo: "87803", name: "ESQUEL", city: "Esquel" },
    { oaci: "SAVT", wmo: "87828", name: "TRELEW", city: "Trelew" },
    { oaci: "SAWE", wmo: "87934", name: "RIO GRANDE", city: "Río Grande" },
    { oaci: "SAVV", wmo: "87791", name: "VIEDMA", city: "Viedma" },
    { oaci: "SAVB", wmo: "87852", name: "PERITO MORENO", city: "Perito Moreno" },
    { oaci: "SAVY", wmo: "87823", name: "PUERTO MADRYN", city: "Puerto Madryn" },
    { oaci: "SAWJ", wmo: "87909", name: "SAN JULIAN", city: "San Julián" },
    { oaci: "SAWU", wmo: "87912", name: "SANTA CRUZ", city: "Puerto Santa Cruz" }
  ],
  "ANTARTIDA": [
    { oaci: "SAWB", wmo: "89055", name: "BASE MARAMBIO", city: "Antártida Argentina" },
    { oaci: "SCRM", wmo: "89099", name: "TTE. RODOLFO MARSH", city: "Isla Rey Jorge (Chile)" }
  ]
};

// Diccionario de abreviaturas meteorológicas para pilotos de planeador
const METAR_DICTIONARY = {
  // Descriptores
  "MI": "Ligeras (Shallow)", "BC": "Bancos (Patches)", "PR": "Parcial (Partial)", "DR": "Ventisca baja",
  "BL": "Ventisca alta (Blowing)", "SH": "Chubascos (Showers)", "TS": "Tormenta (Thunderstorm)", "FZ": "Superenfriado (Freezing)",
  // Fenómenos
  "DZ": "Llovizna (Drizzle)", "RA": "Lluvia (Rain)", "SN": "Nieve (Snow)", "SG": "Cinarra (Snow Grains)",
  "PL": "Hielo granulado", "GR": "Granizo (Hail)", "GS": "Graupel (Small Hail)", "BR": "Neblina (Mist)",
  "FG": "Niebla (Fog)", "FU": "Humo (Smoke)", "VA": "Ceniza volcánica", "DU": "Polvo generalizado",
  "SA": "Arena (Sand)", "HZ": "Bruma (Haze)", "PO": "Remolinos de polvo", "SQ": "Turbonada (Squall)",
  "FC": "Tornado / Tromba marina", "SS": "Tempestad de arena", "DS": "Tempestad de polvo",
  // Calificadores de intensidad
  "-": "Ligero/a", "+": "Fuerte", "": "Moderado/a",
  // Tipos de nubes
  "FEW": "Escasa nubosidad (1/8 a 2/8 de cielo cubierto)",
  "SCT": "Nubosidad dispersa (3/8 a 4/8 de cielo cubierto)",
  "BKN": "Cielo nublado / Fragmentado (5/8 a 7/8 de cielo cubierto)",
  "OVC": "Cielo cubierto (8/8 de cielo cubierto)",
  "VV": "Visibilidad vertical (Cielo invisible)",
  "NSC": "No se observan nubes significativas (No Significant Clouds)",
  "NCD": "Ninguna nube detectada (No Clouds Detected - AUTO)",
  "CLR": "Cielo despejado (Clear)",
  "SKC": "Cielo despejado (Sky Clear)",
  "CB": "Cumulonimbus (¡Peligro extremo para planeadores!)",
  "TCU": "Cumulus potente (Towering Cumulus - Turbulencia fuerte)"
};

// Alfabeto fonético aeronáutico internacional
const AERONAUTICAL_ALPHABET = {
  "A": "Alfa", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Eco", "F": "Foxtrot",
  "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliett", "K": "Kilo", "L": "Lima",
  "M": "Mike", "N": "November", "O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo",
  "S": "Sierra", "T": "Tango", "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "Ex-ray",
  "Y": "Yankee", "Z": "Zulu"
};

// Pronunciación de dígitos en aviación (Español)
const AERONAUTICAL_NUMBERS = {
  "0": "cero", "1": "uno", "2": "dos", "3": "tres", "4": "cuatro", "5": "cinco",
  "6": "seis", "7": "siete", "8": "ocho", "9": "nueve", "/": "barra"
};

// Base de datos completa para la guía rápida (Cheat Sheet) de aviación
const QUICK_GUIDE_DATABASE = {
  "🌧️ Fenómenos de Tiempo (Precipitaciones y Obstrucciones)": [
    { code: "RA", desc: "Lluvia (Rain)" },
    { code: "DZ", desc: "Llovizna (Drizzle)" },
    { code: "SN", desc: "Nieve (Snow)" },
    { code: "SG", desc: "Cinarra (Snow Grains - Nieve granular)" },
    { code: "PL", desc: "Hielo granulado (Ice Pellets)" },
    { code: "GR", desc: "Granizo (Hail)" },
    { code: "GS", desc: "Graupel (Granizo pequeño / Nieve blanda)" },
    { code: "BR", desc: "Neblina (Mist - Visibilidad ≥ 1 km)" },
    { code: "FG", desc: "Niebla (Fog - Visibilidad < 1 km)" },
    { code: "HZ", desc: "Bruma (Haze)" },
    { code: "FU", desc: "Humo (Smoke)" },
    { code: "VA", desc: "Ceniza volcánica (Volcanic Ash)" },
    { code: "DU", desc: "Polvo generalizado (Widespread Dust)" },
    { code: "SA", desc: "Arena (Sand)" }
  ],
  "🌀 Descriptores y Otros Fenómenos": [
    { code: "TS", desc: "Tormenta (Thunderstorm)" },
    { code: "SH", desc: "Chubascos (Showers)" },
    { code: "FZ", desc: "Superenfriado (Freezing)" },
    { code: "MI", desc: "Ligeras (Shallow - Capa delgada)" },
    { code: "BC", desc: "Bancos (Patches)" },
    { code: "PR", desc: "Parcial (Partial)" },
    { code: "DR", desc: "Ventisca baja (Low Drifting)" },
    { code: "BL", desc: "Ventisca alta (Blowing)" },
    { code: "PO", desc: "Remolinos de polvo (Dust Devils)" },
    { code: "SQ", desc: "Turbonada (Squall)" },
    { code: "FC", desc: "Tornado / Tromba marina (Funnel Cloud)" },
    { code: "SS", desc: "Tempestad de arena (Sandstorm)" },
    { code: "DS", desc: "Tempestad de polvo (Duststorm)" }
  ],
  "☁️ Nubosidad e Intensidad": [
    { code: "-", desc: "Ligero / Poca intensidad (Light)" },
    { code: "+", desc: "Fuerte / Gran intensidad (Heavy)" },
    { code: "VC", desc: "En las cercanías (Vicinity)" },
    { code: "FEW", desc: "Escasa nubosidad (1/8 a 2/8 de cielo cubierto)" },
    { code: "SCT", desc: "Nubosidad dispersa (3/8 a 4/8 de cielo cubierto)" },
    { code: "BKN", desc: "Cielo Fragmentado / Nublado (Techo: 5/8 a 7/8)" },
    { code: "OVC", desc: "Cielo Cubierto (Techo: 8/8 de cielo)" },
    { code: "CLR", desc: "Cielo despejado (Clear)" },
    { code: "NSC", desc: "No se observan nubes significativas" },
    { code: "NCD", desc: "Ninguna nube detectada (AUTO)" },
    { code: "VV", desc: "Visibilidad vertical (Cielo invisible)" },
    { code: "CB", desc: "Cumulonimbus (¡Nube de tormenta, peligro extremo!)" },
    { code: "TCU", desc: "Cumulus potente (Towering Cumulus - Turbulencia)" }
  ],
  "✈️ Alfabeto Aeronáutico": [
    { code: "A", desc: "Alfa" },
    { code: "B", desc: "Bravo" },
    { code: "C", desc: "Charlie" },
    { code: "D", desc: "Delta" },
    { code: "E", desc: "Eco" },
    { code: "F", desc: "Foxtrot" },
    { code: "G", desc: "Golf" },
    { code: "H", desc: "Hotel" },
    { code: "I", desc: "India" },
    { code: "J", desc: "Juliett" },
    { code: "K", desc: "Kilo" },
    { code: "L", desc: "Lima" },
    { code: "M", desc: "Mike" },
    { code: "N", desc: "November" },
    { code: "O", desc: "Oscar" },
    { code: "P", desc: "Papa" },
    { code: "Q", desc: "Quebec" },
    { code: "R", desc: "Romeo" },
    { code: "S", desc: "Sierra" },
    { code: "T", desc: "Tango" },
    { code: "U", desc: "Uniform" },
    { code: "V", desc: "Victor" },
    { code: "W", desc: "Whiskey" },
    { code: "X", desc: "Ex-ray" },
    { code: "Y", desc: "Yankee" },
    { code: "Z", desc: "Zulu" }
  ]
};

// --- MOTOR DE PARSING Y DECODIFICACIÓN ---
class MetarParser {
  static parse(metarText) {
    // Normalizar texto
    const raw = metarText.trim().replace(/\s+/g, " ").replace(/=$/, "");
    const tokens = raw.split(" ");

    let result = {
      raw: raw,
      type: "METAR",
      station: null,
      dateTime: null,
      auto: false,
      cor: false,
      wind: null,
      visib: null,
      weather: [],
      clouds: [],
      tempDew: null,
      altimeter: null,
      remarks: [],
      trend: "NOSIG",
      flightCategory: "VFR",
      tokenMap: [] // Para resaltado interactivo
    };

    let idx = 0;
    let inTrend = false;
    let inRemarks = false;

    // Diccionario de palabras clave en remarks para decodificación interactiva nítida
    const REMARK_WORDS = {
      "CB": "Cumulonimbus (nubes de tormenta de gran desarrollo vertical)",
      "OBS": "observado/s",
      "TO": "hacia el / los",
      "N": "Norte (N)",
      "S": "Sur (S)",
      "E": "Este (E)",
      "W": "Oeste (W)",
      "NE": "Nordeste (NE)",
      "NW": "Noroeste (NW)",
      "SE": "Sudeste (SE)",
      "SW": "Sudoeste (SW)",
      "LN": "Línea (de tormentas o inestabilidad)",
      "DSNT": "Distante",
      "VC": "En las cercanías",
      "ALQDS": "En todas las direcciones",
      "TS": "Tormenta"
    };

    tokens.forEach((token, tIdx) => {
      let decodedText = "";
      let title = "Código";
      let isMatched = false;
      const startChar = raw.indexOf(token);
      const endChar = startChar + token.length;

      // 1. Tipo de Reporte
      if (token === "METAR" || token === "SPECI") {
        result.type = token;
        decodedText = token === "METAR" ? "Reporte meteorológico regular de aeródromo" : "Reporte meteorológico especial de aeródromo (cambio significativo)";
        title = "Tipo de Reporte";
        isMatched = true;
      }

      // 2. Identificador de Estación (ICAO - 4 Letras comenzando con S o K o C, etc.)
      else if (!result.station && /^[A-Z]{4}$/.test(token)) {
        result.station = token;
        const apt = MetarParser.findAirportByOaci(token);
        decodedText = apt ? `${apt.name} (Ubicación: ${apt.city}, ${apt.fir})` : `Aeródromo con código OACI internacional: ${token}`;
        title = "Estación";
        isMatched = true;
      }

      // 3. Fecha y Hora (DDHHMMZ)
      else if (!result.dateTime && /^\d{6}Z$/.test(token)) {
        const day = token.substring(0, 2);
        const hour = token.substring(2, 4);
        const min = token.substring(4, 6);
        result.dateTime = { day, hour, min };
        decodedText = `Observación realizada el día ${parseInt(day)} a las ${hour}:${min} UTC (Hora Zulú)`;
        title = "Fecha y Hora";
        isMatched = true;
      }

      // 4. AUTO o COR
      else if (token === "AUTO" || token === "COR") {
        if (token === "AUTO") {
          result.auto = true;
          decodedText = "Reporte automático (generado por estación autónoma sin intervención humana)";
          title = "Modo Automático";
        } else {
          result.cor = true;
          decodedText = "Reporte corregido (modificación de un reporte emitido previamente)";
          title = "Corrección";
        }
        isMatched = true;
      }

      // 5. Viento (Dirección, velocidad, ráfagas)
      // Patrones: 18010KT, 23015G25KT, VRB02KT
      else if (/^\d{5}(G\d{2})?KT$/.test(token) || /^VRB\d{2}KT$/.test(token)) {
        const dirStr = token.substring(0, 3);
        const isVrb = dirStr === "VRB";
        const speed = parseInt(token.substring(3, 5));

        let gusts = null;
        let gustIdx = token.indexOf("G");
        if (gustIdx !== -1) {
          gusts = parseInt(token.substring(gustIdx + 1, gustIdx + 3));
        }

        const dirText = isVrb ? "de dirección variable" : `de los ${dirStr}°`;
        const speedText = `${speed} nudos (KT)${gusts ? ` con ráfagas de hasta ${gusts} nudos` : ""}`;

        if (!result.wind && !inTrend) {
          result.wind = {
            direction: isVrb ? "VRB" : parseInt(dirStr),
            speed: speed,
            gusts: gusts
          };

          // Consejo para pilotos de planeador
          let gliderTip = "";
          if (gusts && (gusts - speed >= 10)) {
            gliderTip = " ⚠️ ¡Alerta! Ráfagas de viento fuertes. Peligro de turbulencia en aproximación.";
          } else if (speed > 15) {
            gliderTip = " ⚠️ Viento fuerte. Cuidado con la componente de viento cruzado.";
          } else if (speed < 5) {
            gliderTip = " ℹ️ Viento calmo o suave. Ideal para despegues por torno o remolque.";
          }

          decodedText = `Viento ${dirText} a ${speedText}.${gliderTip}`;
          title = "Viento";
        } else {
          // Viento pronosticado en sección de tendencia/cambio
          decodedText = `Viento pronosticado ${dirText} a ${speedText} debido al cambio indicado (tendencia).`;
          title = "Viento Pronosticado";
        }
        isMatched = true;
      }

      // 5b. Variabilidad del Viento (ej: 180V240)
      else if (/^\d{3}V\d{3}$/.test(token)) {
        const parts = token.split("V");
        if (result.wind && !inTrend) {
          result.wind.variability = { from: parseInt(parts[0]), to: parseInt(parts[1]) };
        }
        decodedText = inTrend 
          ? `Variabilidad de dirección del viento pronosticada entre los ${parts[0]}° y los ${parts[1]}°`
          : `Dirección del viento varía entre los ${parts[0]}° y los ${parts[1]}°`;
        title = inTrend ? "Variabilidad de Viento Pronosticada" : "Variabilidad del Viento";
        isMatched = true;
      }

      // 6. Visibilidad (Metros, Millas, CAVOK)
      else if (token === "CAVOK" || /^\d{4}$/.test(token) || /^\d+(\/\d+)?SM$/.test(token)) {
        if (token === "CAVOK") {
          if (!result.visib && !inTrend) result.visib = { value: 9999, cavok: true };
          decodedText = inTrend
            ? "CAVOK Pronosticado: Visibilidad superior a 10 km, sin nubes por debajo de 5,000 pies o del sector mínimo de seguridad, sin cumulonimbus (CB) ni towering cumulus (TCU), y sin fenómenos significativos en el aeródromo."
            : "CAVOK (Ceiling And Visibility OK): Visibilidad superior a 10 km, sin nubes por debajo de 5,000 pies o del sector mínimo de seguridad, sin cumulonimbus (CB) ni towering cumulus (TCU), y sin fenómenos significativos en el aeródromo.";
          title = inTrend ? "Visibilidad y Techo OK Pronosticados" : "Visibilidad y Techo OK";
        } else if (/^\d{4}$/.test(token)) {
          const meters = parseInt(token);
          if (!result.visib && !inTrend) result.visib = { value: meters, cavok: false };
          if (meters === 9999) {
            decodedText = inTrend
              ? "Visibilidad pronosticada de 10 kilómetros o más (Condiciones visuales excelentes)"
              : "Visibilidad de 10 kilómetros o más (Condiciones visuales excelentes)";
          } else {
            decodedText = inTrend
              ? `Visibilidad horizontal pronosticada de ${meters} metros (${(meters / 1000).toFixed(1)} km) debido al cambio indicado.`
              : `Visibilidad horizontal de ${meters} metros (${(meters / 1000).toFixed(1)} km)`;
            if (meters < 1500 && !inTrend) {
              decodedText += " ⚠️ ¡Alerta! Visibilidad reducida. Operación IFR obligatoria para aviones de motor, prohibido vuelo de planeadores sin habilitación especial.";
            }
          }
          title = inTrend ? "Visibilidad Pronosticada" : "Visibilidad";
        } else {
          // Millas terrestres (EE.UU)
          if (!result.visib && !inTrend) result.visib = { value: token, cavok: false };
          decodedText = inTrend
            ? `Visibilidad pronosticada de ${token.replace("SM", "")} millas terrestres (Statute Miles).`
            : `Visibilidad de ${token.replace("SM", "")} millas terrestres (Statute Miles)`;
          title = inTrend ? "Visibilidad Pronosticada" : "Visibilidad";
        }
        isMatched = true;
      }

      // 6b. Alcance Visual en Pista (RVR - Runway Visual Range, ej: R25/1200D)
      else if (/^R\d{2}[LCR]?\/[MP]?\d{4}(V[MP]?\d{4})?[UDN]?$/.test(token)) {
        const parts = token.substring(1).split("/");
        const runwayStr = parts[0];
        let rvrData = parts[1];
        
        let trend = "";
        const lastChar = rvrData.charAt(rvrData.length - 1);
        if (["U", "D", "N"].includes(lastChar)) {
          trend = lastChar;
          rvrData = rvrData.substring(0, rvrData.length - 1);
        }
        
        let prefix = "";
        if (rvrData.startsWith("P")) {
          prefix = "más de ";
          rvrData = rvrData.substring(1);
        } else if (rvrData.startsWith("M")) {
          prefix = "menos de ";
          rvrData = rvrData.substring(1);
        }
        
        // Manejar rango variable si existiera (ej: 0800V1200)
        let rangeText = "";
        if (rvrData.includes("V")) {
          const rangeParts = rvrData.split("V");
          const r1 = parseInt(rangeParts[0]);
          const r2 = parseInt(rangeParts[1]);
          rangeText = `variable entre ${r1} y ${r2} metros`;
        } else {
          rangeText = `${prefix}${parseInt(rvrData)} metros`;
        }
        
        let runwayName = `Pista ${runwayStr.substring(0, 2)}`;
        if (runwayStr.endsWith("L")) runwayName += " Izquierda (Left)";
        else if (runwayStr.endsWith("R")) runwayName += " Derecha (Right)";
        else if (runwayStr.endsWith("C")) runwayName += " Central (Center)";
        
        let trendText = "";
        if (trend === "D") trendText = ", con tendencia en disminución (Downward)";
        else if (trend === "U") trendText = ", con tendencia en aumento (Upward)";
        else if (trend === "N") trendText = ", sin cambios significativos (No change)";
        
        decodedText = inTrend
          ? `Alcance Visual en Pista (RVR) pronosticado para la ${runwayName}: ${rangeText}${trendText}.`
          : `Alcance Visual en Pista (RVR) para la ${runwayName}: ${rangeText}${trendText}.`;
        title = inTrend ? "RVR Pronosticado" : "RVR (Alcance Visual en Pista)";
        
        if (!result.rvr && !inTrend) result.rvr = [];
        if (!inTrend) {
          result.rvr.push({
            runway: runwayStr,
            range: rvrData,
            trend: trend
          });
        }
        
        isMatched = true;
      }

      // 7. Fenómenos Meteorológicos Significativos (ej. -RA, DZ, BR, +TSRA, etc.)
      else if (MetarParser.isWeatherPhenomenon(token)) {
        let intensity = "";
        let rawPhen = token;

        if (token.startsWith("-")) {
          intensity = "Ligera ";
          rawPhen = token.substring(1);
        } else if (token.startsWith("+")) {
          intensity = "Fuerte ";
          rawPhen = token.substring(1);
        } else if (token.startsWith("VC")) {
          intensity = "En las cercanías (Vicinity) ";
          rawPhen = token.substring(2);
        }

        let decodedPhen = [];
        // Desglosar en partes de 2 letras
        for (let i = 0; i < rawPhen.length; i += 2) {
          let code = rawPhen.substring(i, i + 2);
          decodedPhen.push(METAR_DICTIONARY[code] || code);
        }

        const phenText = `${intensity}${decodedPhen.join(" y ")}`;
        if (!inTrend) {
          result.weather.push({ token, decoded: phenText });
        }
        decodedText = inTrend
          ? `Fenómenos meteorológicos pronosticados: ${phenText} debido al cambio indicado.`
          : `Fenómenos meteorológicos activos: ${phenText}`;
        title = inTrend ? "Fenómeno Pronosticado" : "Fenómeno";
        isMatched = true;
      }

      // 8. Capas de Nubes (ej. FEW025, SCT040CB, BKN080, NSC, CLR)
      else if (token === "NSC" || token === "NCD" || token === "CLR" || token === "SKC" || /^(FEW|SCT|BKN|OVC|VV)\d{3}(CB|TCU)?$/.test(token)) {
        if (token === "NSC") {
          decodedText = METAR_DICTIONARY.NSC;
          title = inTrend ? "Nubosidad Pronosticada" : "Nubosidad";
          if (!inTrend) {
            result.clouds.push({ token, type: "NSC", height: null, special: null, decoded: decodedText });
          }
        } else if (token === "CLR" || token === "SKC" || token === "NCD") {
          decodedText = METAR_DICTIONARY[token] || "Cielo despejado";
          title = inTrend ? "Nubosidad Pronosticada" : "Nubosidad";
          if (!inTrend) {
            result.clouds.push({ token, type: "CLR", height: null, special: null, decoded: decodedText });
          }
        } else {
          const type = token.substring(0, 3);
          const heightFt = parseInt(token.substring(3, 6)) * 100;
          const special = token.length > 6 ? token.substring(6) : null;

          let specialText = "";
          if (special === "CB") {
            specialText = " - ¡Cumulonimbus detectados! Altísimo peligro para planeadores por corrientes descendentes violentas y granizo.";
          } else if (special === "TCU") {
            specialText = " - ¡Towering Cumulus detectados! Fuertes turbulencias térmicas en desarrollo.";
          }

          if (inTrend) {
            const cleanSpecialText = specialText ? specialText.replace(/\.$/, "") : "";
            decodedText = `Nubosidad pronosticada: ${METAR_DICTIONARY[type]} a una altura de ${heightFt.toLocaleString()} pies (${Math.round(heightFt * 0.3048)} metros)${cleanSpecialText} debido al cambio indicado.`;
            title = "Nubosidad Pronosticada";
          } else {
            decodedText = `${METAR_DICTIONARY[type]} a una altura de ${heightFt.toLocaleString()} pies (${Math.round(heightFt * 0.3048)} metros)${specialText}`;
            title = "Nubosidad";
            result.clouds.push({ token, type, height: heightFt, special, decoded: decodedText });
          }
        }
        title = inTrend ? "Nubosidad Pronosticada" : "Nubosidad";
        isMatched = true;
      }

      // 9. Temperatura y Punto de Rocío (ej. 12/08, M03/M05)
      else if (/^(M?\d{2})\/(M?\d{2})$/.test(token)) {
        const parts = token.split("/");

        const parseTemp = (s) => s.startsWith("M") ? -parseInt(s.substring(1)) : parseInt(s);
        const temp = parseTemp(parts[0]);
        const dew = parseTemp(parts[1]);

        // Calcular humedad relativa aproximada usando la fórmula de Magnus-Tetens
        const spread = temp - dew;
        const rh = Math.round(100 - (5 * spread)); // Regla empírica del spread de 5% por grado

        if (!result.tempDew && !inTrend) {
          result.tempDew = { temp, dew, rh };
        }

        if (inTrend) {
          decodedText = `Temperatura pronosticada: ${temp}°C | Punto de Rocío pronosticado: ${dew}°C (Humedad relativa aprox: ${Math.max(0, Math.min(100, rh))}%).`;
          title = "Temperatura y Rocío Pronosticados";
        } else {
          let fogWarning = "";
          if (spread <= 2 && spread >= 0) {
            fogWarning = " ⚠️ ¡Alerta de Niebla! Gradiente térmico muy bajo (≤ 2°C). Alta probabilidad de reducción de visibilidad en minutos por formación de niebla por radiación o advección.";
          }

          decodedText = `Temperatura del aire: ${temp}°C | Punto de Rocío: ${dew}°C (Humedad relativa aprox: ${Math.max(0, Math.min(100, rh))}%).${fogWarning}`;
          title = "Temperatura y Rocío";
        }
        isMatched = true;
      }

      // 10. Altimímetro / QNH (ej. Q1028, A2992)
      else if (/^Q\d{4}$/.test(token) || /^A\d{4}$/.test(token)) {
        const isQnh = token.startsWith("Q");
        let val, unit;
        if (isQnh) {
          val = parseInt(token.substring(1));
          unit = "hPa";
        } else {
          val = parseFloat(token.substring(1)) / 100;
          unit = "inHg";
        }

        if (!result.altimeter && !inTrend) {
          result.altimeter = { value: val, unit };
        }

        if (inTrend) {
          decodedText = isQnh
            ? `Presión barométrica QNH pronosticada: ${val} Hectopascales (hPa) debido al cambio indicado.`
            : `Presión barométrica altímetro pronosticada: ${val.toFixed(2)} pulgadas de Mercurio (inHg) debido al cambio indicado.`;
          title = "QNH / Altimímetro Pronosticado";
        } else {
          decodedText = isQnh
            ? `Presión barométrica QNH: ${val} Hectopascales (hPa). Calibración del altímetro para leer la altura real sobre el nivel medio del mar.`
            : `Presión barométrica altímetro: ${val.toFixed(2)} pulgadas de Mercurio (inHg). Usado comúnmente en Norteamérica.`;
          title = "QNH / Altimímetro";
        }
        isMatched = true;
      }

      // 11. Indicadores de Cambios / Tendencias (BECMG, TEMPO, INTER, FM, PROB)
      else if (token === "BECMG" || token === "TEMPO" || token === "INTER" || /^FM\d{6}Z?$/.test(token) || /^FM\d{4}$/.test(token) || /^PROB\d{2}$/.test(token)) {
        inTrend = true;
        inRemarks = false; // Trend cancels remarks just in case
        
        if (token === "BECMG") {
          decodedText = "BECMG (Becoming): Inicio de un cambio gradual en las condiciones meteorológicas pronosticadas en las próximas horas.";
          title = "Cambio Gradual (BECMG)";
        } else if (token === "TEMPO") {
          decodedText = "TEMPO (Temporary): Fluctuaciones temporales y periódicas de corta duración (menos de una hora) en las condiciones meteorológicas pronosticadas.";
          title = "Fluctuación Temporal (TEMPO)";
        } else if (token === "INTER") {
          decodedText = "INTER (Intermittent): Variaciones intermitentes y frecuentes de corta duración pronosticadas en las condiciones meteorológicas.";
          title = "Cambio Intermitente (INTER)";
        } else if (token.startsWith("FM")) {
          const timeStr = token.replace("FM", "").replace("Z", "");
          const hour = timeStr.substring(2, 4) || timeStr.substring(0, 2);
          const min = timeStr.substring(4, 6) || timeStr.substring(2, 4) || "00";
          decodedText = `FM (From): Cambio rápido y permanente a partir de las ${hour}:${min} UTC.`;
          title = "Cambio Permanente (FM)";
        } else if (token.startsWith("PROB")) {
          const probVal = token.replace("PROB", "");
          decodedText = `PROB (Probability): Probabilidad del ${probVal}% de ocurrencia de fenómenos meteorológicos transitorios.`;
          title = "Probabilidad (PROB)";
        }
        isMatched = true;
      }

      // 11b. NOSIG (No Significant Change)
      else if (token === "NOSIG") {
        result.trend = "NOSIG";
        decodedText = "NOSIG (No Significant Change): No se pronostican cambios significativos en las condiciones climáticas en las próximas 2 horas.";
        title = "Tendencia de Clima";
        isMatched = true;
      }

      // 12. Remarks argentinos o especiales (RMK PP000, etc.)
      else if (token.startsWith("RMK") || inRemarks || /^PP\d{3}$/.test(token)) {
        if (token.startsWith("RMK")) {
          inRemarks = true;
          inTrend = false;
          decodedText = "RMK (Remarks): Inicio de la sección de comentarios o notas adicionales específicas del país.";
          title = "Inicio de Comentarios";
        } else if (/^PP\d{3}$/.test(token)) {
          const mm = parseInt(token.substring(2));
          decodedText = `PP (Precipitación): Precipitación acumulada en la última hora de ${mm} mm. (Nota específica del Servicio Meteorológico Nacional de Argentina).`;
          title = "Lluvia Acumulada";
        } else {
          // Si estamos en la sección de remarks y es una palabra del vocabulario de remarks
          const remarkWordLower = token.replace(/=$/, "").toUpperCase();
          if (REMARK_WORDS[remarkWordLower]) {
            decodedText = `Información de remark: ${REMARK_WORDS[remarkWordLower]} (Nota del operador en la estación).`;
            title = "Comentario / Remark";
          } else {
            decodedText = `Información adicional de remark del operador: ${token}`;
            title = "Nota Adicional";
          }
        }
        isMatched = true;
      }

      // Si no encaja con ningún patrón estándar
      if (!isMatched) {
        decodedText = `Token o grupo de código METAR adicional: ${token}`;
        title = "Nota";
      }

      result.tokenMap.push({
        token,
        startChar,
        endChar,
        title,
        decoded: decodedText
      });
    });

    // Calcular categoría de vuelo
    result.flightCategory = MetarParser.calculateFlightCategory(result);

    return result;
  }

  static findAirportByOaci(oaci) {
    for (const fir in AIRPORT_DATABASE) {
      const apt = AIRPORT_DATABASE[fir].find(a => a.oaci === oaci);
      if (apt) {
        return { ...apt, fir };
      }
    }
    return null;
  }

  static isWeatherPhenomenon(token) {
    const cleanToken = token.replace(/^[-+]/, "").replace(/^VC/, "");
    if (cleanToken.length < 2 || cleanToken.length % 2 !== 0) return false;

    // Probar si todos los bloques de 2 letras están en el diccionario
    for (let i = 0; i < cleanToken.length; i += 2) {
      let code = cleanToken.substring(i, i + 2);
      if (!METAR_DICTIONARY[code]) return false;
    }
    return true;
  }

  static calculateFlightCategory(parsed) {
    // Clasificación OACI de categorías de vuelo:
    // VFR: Visib >= 8000m AND Techo nuboso (BKN/OVC) >= 3000 ft
    // MVFR: Visib entre 5000m y 8000m OR Techo entre 1000 y 3000 ft
    // IFR: Visib entre 1500m y 5000m OR Techo entre 500 y 1000 ft
    // LIFR: Visib < 1500m OR Techo < 500 ft

    if (parsed.visib && parsed.visib.cavok) return "VFR";

    let vis = 9999;
    if (parsed.visib && typeof parsed.visib.value === "number") {
      vis = parsed.visib.value;
    }

    // Encontrar el techo (cloud ceiling: la capa más baja que sea BKN u OVC)
    let ceiling = 99999;
    parsed.clouds.forEach(c => {
      if ((c.type === "BKN" || c.type === "OVC" || c.type === "VV") && c.height !== null) {
        if (c.height < ceiling) {
          ceiling = c.height;
        }
      }
    });

    if (vis < 1500 || ceiling < 500) {
      return "LIFR"; // Vuelo instrumental de muy bajo nivel. Peligro total para planeadores.
    } else if (vis < 5000 || ceiling < 1000) {
      return "IFR";  // Reglas de vuelo instrumental. Imposible volar planeador.
    } else if (vis < 8000 || ceiling < 3000) {
      return "MVFR"; // Vuelo visual marginal. Se debe tener precaución en planeador.
    } else {
      return "VFR";  // Vuelo visual. Condiciones seguras y aptas para vuelo térmico.
    }
  }
}

// AtisSpeechEngine eliminado


// --- RENDERIZADORES DE GRÁFICOS VISUALES (CANVAS) ---
class MetarGauges {
  // 1. Rosa de Vientos animada + Calcetín de viento (manga)
  static drawWindCompass(canvasId, direction, speed, gusts) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) / 2 - 25;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Fondo brillante claro sutil
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius + 20);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(1, "#f1f5f9");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 15, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar anillo de brújula
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Dibujar marcas de grados principales
    const points = [
      { name: "N", angle: 0 },
      { name: "NE", angle: 45 },
      { name: "E", angle: 90 },
      { name: "SE", angle: 135 },
      { name: "S", angle: 180 },
      { name: "SW", angle: 225 },
      { name: "W", angle: 270 },
      { name: "NW", angle: 315 }
    ];

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    points.forEach(pt => {
      const rad = (pt.angle - 90) * Math.PI / 180;
      const tx = cx + Math.cos(rad) * (radius - 16);
      const ty = cy + Math.sin(rad) * (radius - 16);

      ctx.fillStyle = (pt.name === "N") ? "#dc2626" : "#0f172a";
      ctx.font = (pt.name === "N" || pt.name === "E" || pt.name === "S" || pt.name === "W") ? "bold 13px Outfit" : "11px Outfit";
      ctx.fillText(pt.name, tx, ty);

      // Pequeñas líneas marcas
      const startX = cx + Math.cos(rad) * radius;
      const startY = cy + Math.sin(rad) * radius;
      const endX = cx + Math.cos(rad) * (radius - 8);
      const endY = cy + Math.sin(rad) * (radius - 8);
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    });

    // Flecha de viento / Calcetín de viento
    if (direction !== null && speed !== null) {
      const isVariable = direction === "VRB" || isNaN(direction);
      
      if (!isVariable) {
        const dirNum = parseFloat(direction);
        const angleRad = (dirNum - 90) * Math.PI / 180;
        
        // 1. Dibujar flecha indicadora elegante en el anillo exterior apuntando hacia el centro (de dónde viene el viento)
        const px = cx + Math.cos(angleRad) * radius;
        const py = cy + Math.sin(angleRad) * radius;
        
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angleRad + Math.PI); // Apunta hacia el centro
        
        ctx.fillStyle = "#1d4ed8";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-12, -7);
        ctx.lineTo(-8, 0);
        ctx.lineTo(-12, 7);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 2. Dibujar manga de viento animada en el centro (fiel a la física)
        // Poste vertical fijo en el centro
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx, cy + 15);
        ctx.lineTo(cx, cy - 20);
        ctx.stroke();

        // Soporte de pivote superior fijo
        ctx.fillStyle = "#334155";
        ctx.beginPath();
        ctx.arc(cx, cy - 20, 3, 0, Math.PI * 2);
        ctx.fill();

        // Manga de viento rotando sobre el soporte (apunta hacia donde VA el viento)
        const targetAngleRad = angleRad + Math.PI;
        
        ctx.save();
        ctx.translate(cx, cy - 20);
        ctx.rotate(targetAngleRad);
        
        // Anillo giratorio de la manga
        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Manga inflada según nudos
        const factor = Math.min(1.0, speed / 15);
        const droop = (1.0 - factor) * 18; // Caída de la manga
        const len = 35;
        
        const segments = [
          { color: "#dc2626", w1: 8, w2: 7 },
          { color: "#ffffff", w1: 7, w2: 6 },
          { color: "#dc2626", w1: 6, w2: 5 },
          { color: "#ffffff", w1: 5, w2: 3 }
        ];
        
        segments.forEach((seg, index) => {
          const x1 = index * (len / 4);
          const y1 = droop * Math.pow(index / 4, 2);
          const x2 = (index + 1) * (len / 4);
          const y2 = droop * Math.pow((index + 1) / 4, 2);
          
          ctx.fillStyle = seg.color;
          ctx.beginPath();
          ctx.moveTo(x1, y1 - seg.w1);
          ctx.lineTo(x2, y2 - seg.w2);
          ctx.lineTo(x2, y2 + seg.w2);
          ctx.lineTo(x1, y1 + seg.w1);
          ctx.closePath();
          ctx.fill();
        });
        
        ctx.restore();
      } else {
        // Viento Variable: No hay dirección fija
        // Dibujar el mástil y la manga colgando verticalmente
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx, cy + 15);
        ctx.lineTo(cx, cy - 20);
        ctx.stroke();

        ctx.fillStyle = "#334155";
        ctx.beginPath();
        ctx.arc(cx, cy - 20, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(cx, cy - 20);
        ctx.rotate(Math.PI / 2); // Cuelga hacia abajo
        
        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        
        const droop = 20; // Caída total
        const len = 30;
        
        const segments = [
          { color: "#dc2626", w1: 8, w2: 7 },
          { color: "#ffffff", w1: 7, w2: 6 },
          { color: "#dc2626", w1: 6, w2: 5 },
          { color: "#ffffff", w1: 5, w2: 3 }
        ];
        
        segments.forEach((seg, index) => {
          const x1 = index * (len / 4);
          const y1 = droop * Math.pow(index / 4, 2);
          const x2 = (index + 1) * (len / 4);
          const y2 = droop * Math.pow((index + 1) / 4, 2);
          
          ctx.fillStyle = seg.color;
          ctx.beginPath();
          ctx.moveTo(x1, y1 - seg.w1);
          ctx.lineTo(x2, y2 - seg.w2);
          ctx.lineTo(x2, y2 + seg.w2);
          ctx.lineTo(x1, y1 + seg.w1);
          ctx.closePath();
          ctx.fill();
        });
        
        ctx.restore();
      }

      // Texto de información en el centro inferior
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 15px Outfit";
      const dirText = direction === "VRB" ? "VRB" : `${direction}°`;
      ctx.fillText(`${dirText} / ${speed} KT`, cx, cy + radius + 14);
    } else {
      // Viento calmo
      ctx.fillStyle = "#15803d";
      ctx.font = "bold 15px Outfit";
      ctx.fillText("VIENTO EN CALMA", cx, cy);
    }
  }

  // 2. Gráfico de Capas Nubosas en el cielo
  static drawCloudLevels(canvasId, cloudsList) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Fondo degradado del cielo diurno (celeste brillante a horizonte claro)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, "#bae6fd");
    skyGrad.addColorStop(1, "#f0f9ff");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Escalar los niveles según la altura real del canvas (referencia original: 250px)
    const scaleY = height / 250;

    // Líneas de escala de altura (Pies: 0, 1000, 2000, 5000, 10000)
    const levels = [
      { feet: 10000, y: 30 * scaleY },
      { feet: 7000, y: 70 * scaleY },
      { feet: 4000, y: 120 * scaleY },
      { feet: 2000, y: 170 * scaleY },
      { feet: 500, y: 220 * scaleY },
      { feet: 0, y: 245 * scaleY }
    ];

    ctx.strokeStyle = "rgba(15, 23, 42, 0.15)";
    ctx.lineWidth = 1;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = "10px Inter";

    levels.forEach(lvl => {
      ctx.beginPath();
      ctx.moveTo(60, lvl.y);
      ctx.lineTo(width - 15, lvl.y);
      ctx.stroke();

      ctx.fillStyle = "#334155";
      ctx.fillText(`${lvl.feet.toLocaleString()} ft`, 10, lvl.y);
    });

    // Dibujar el suelo
    ctx.fillStyle = "#166534";
    ctx.fillRect(60, height - 15, width - 75, 15);
    ctx.fillStyle = "#22c55e";
    ctx.fillRect(60, height - 17, width - 75, 2);

    // Dibujar las capas nubosas reales
    // Mapear pies a coordenadas Y usando interpolación lineal simple
    const feetToY = (ft) => {
      if (ft <= 0) return 245 * scaleY;
      if (ft >= 10000) return 30 * scaleY;

      // Encontrar segmento
      for (let i = 0; i < levels.length - 1; i++) {
        const top = levels[i];
        const bot = levels[i + 1];
        if (ft <= top.feet && ft >= bot.feet) {
          const ratio = (ft - bot.feet) / (top.feet - bot.feet);
          return bot.y - ratio * (bot.y - top.y);
        }
      }
      return 245 * scaleY;
    };

    let hasActualClouds = false;

    cloudsList.forEach(cloud => {
      if (cloud.height !== null) {
        hasActualClouds = true;
        const cyY = feetToY(cloud.height);

        // Estilo de nube basado en cobertura
        let count = 4; // FEW
        let size = 20;
        let opacity = 0.85;

        if (cloud.type === "SCT") { count = 8; }
        else if (cloud.type === "BKN") { count = 16; }
        else if (cloud.type === "OVC") { count = 28; }

        ctx.fillStyle = cloud.special === "CB" ? `rgba(71, 85, 105, ${opacity})` : `rgba(255, 255, 255, ${opacity})`;

        // Dibujar cumulonimbus especial
        if (cloud.special === "CB") {
          ctx.beginPath();
          
          // Mapear coordenadas X originales (90 a 310) al área segura de dibujo
          const mapX = (x) => {
            const minRef = 90;
            const maxRef = 310;
            const ratio = (x - minRef) / (maxRef - minRef);
            return 70 + ratio * (width - 90); // Mapea de forma segura a [70, width - 20]
          };

          // Forma de yunque gigante
          ctx.moveTo(mapX(100), cyY + 15 * scaleY);
          ctx.bezierCurveTo(mapX(90), cyY - 20 * scaleY, mapX(130), cyY - 50 * scaleY, mapX(180), cyY - 40 * scaleY);
          ctx.bezierCurveTo(mapX(220), cyY - 50 * scaleY, mapX(270), cyY - 45 * scaleY, mapX(290), cyY - 10 * scaleY);
          ctx.bezierCurveTo(mapX(310), cyY + 10 * scaleY, mapX(280), cyY + 30 * scaleY, mapX(240), cyY + 25 * scaleY);
          ctx.bezierCurveTo(mapX(220), cyY + 35 * scaleY, mapX(140), cyY + 35 * scaleY, mapX(100), cyY + 15 * scaleY);
          ctx.closePath();
          ctx.fill();

          // Delineado para cumulonimbus
          ctx.strokeStyle = "rgba(15, 23, 42, 0.5)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Rayos o lluvia sutil
          ctx.strokeStyle = "rgba(234, 88, 12, 0.8)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(mapX(170), cyY + 25 * scaleY);
          ctx.lineTo(mapX(165), cyY + 40 * scaleY);
          ctx.lineTo(mapX(175), cyY + 45 * scaleY);
          ctx.lineTo(mapX(170), cyY + 60 * scaleY);
          ctx.stroke();

          // La leyenda anterior 'CB (Cumulonimbus)' roja queda removida para evitar desbordes,
          // se integra limpiamente en la etiqueta abreviada de la capa (ej: BKN (CB) @ 3.000 ft)
        } else {
          // Nube normal de segmentos
          ctx.beginPath();
          const startX = 80;
          const endX = width - 30;
          const step = (endX - startX) / count;

          for (let k = 0; k <= count; k++) {
            const nX = startX + k * step + (Math.random() * 5 - 2.5);
            ctx.arc(nX, cyY, size / 1.5 + (Math.random() * 4), 0, Math.PI * 2);
          }
          ctx.fill();

          // Delineado para alto contraste diurno
          ctx.strokeStyle = "rgba(15, 23, 42, 0.25)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Etiqueta de la capa (Alineada a la derecha para evitar desbordes)
        ctx.save();
        ctx.fillStyle = "#0f172a";
        ctx.font = "bold 10px Outfit";
        ctx.textAlign = "right";
        let labelText = `${cloud.type} @ ${cloud.height.toLocaleString()} ft`;
        if (cloud.special) {
          labelText = `${cloud.type} (${cloud.special}) @ ${cloud.height.toLocaleString()} ft`;
        }
        ctx.fillText(labelText, width - 20, cyY - 14 * scaleY);
        ctx.restore();
      }
    });

    if (!hasActualClouds) {
      ctx.save();
      ctx.fillStyle = "#0369a1";
      ctx.textAlign = "center";
      ctx.font = "bold 12px Outfit";
      
      const centerX = 60 + (width - 75) / 2; // Centro exacto del área de cielo
      
      // Texto adaptado al tipo de condición despejada (más corto y en 2 líneas estilizadas)
      let line1 = "SIN NUBES";
      let line2 = "SIGNIFICATIVAS";
      
      if (cloudsList.length > 0) {
        const first = cloudsList[0];
        if (first.type === "CLR" || first.type === "SKC") {
          line1 = "CELESTE";
          line2 = "DESPEJADO";
        }
      }
      
      ctx.fillText(line1, centerX, height / 2 - 8 * scaleY);
      ctx.fillText(line2, centerX, height / 2 + 8 * scaleY);
      ctx.restore();
    }
  }

  // 3. Indicador de Temperatura y Humedad
  static drawThermometer(canvasId, temp, dew) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Escala del termómetro -10°C a 40°C
    const minT = -15;
    const maxT = 45;

    const tempToY = (t) => {
      const padding = 20;
      return h - padding - ((t - minT) / (maxT - minT)) * (h - padding * 2);
    };

    // Dibujar poste de escalas
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(w / 2, 20);
    ctx.lineTo(w / 2, h - 20);
    ctx.stroke();

    // Dibujar marcas de escala a la izquierda
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.font = "9px Inter";

    for (let t = -10; t <= 40; t += 10) {
      const y = tempToY(t);

      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 12, y);
      ctx.lineTo(w / 2 - 4, y);
      ctx.stroke();

      ctx.fillStyle = t <= 0 ? "#1d4ed8" : "#dc2626";
      ctx.fillText(`${t}°`, w / 2 - 16, y);
    }

    // Dibujar marca de temperatura real (Rojo)
    const yT = tempToY(temp);
    ctx.fillStyle = "#dc2626";
    ctx.beginPath();
    ctx.arc(w / 2, yT, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = "#b91c1c";
    ctx.font = "bold 12px Outfit";
    ctx.fillText(`TEMP: ${temp}°C`, w / 2 + 15, yT);

    // Dibujar marca de punto de rocío (Azul)
    const yD = tempToY(dew);
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.arc(w / 2, yD, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#1d4ed8";
    ctx.font = "bold 11px Outfit";
    ctx.fillText(`ROCÍO: ${dew}°C`, w / 2 + 15, yD + 2);
  }
}

// --- JUEGO DE ENTRENAMIENTO METAR (QUIZ) ---
class MetarQuiz {
  constructor() {
    this.score = 0;
    this.currentQuestionIdx = 0;
    this.questions = [];
    this.scenarios = [
      {
        metar: "METAR SAEZ 241200Z 09015KT 9999 BKN020 18/17 Q1015 NOSIG =",
        question: "¿Cuál es la componente y velocidad del viento en Ezeiza?",
        options: [
          "Viento variable a 15 nudos.",
          "Viento de los 90 grados a 15 nudos.",
          "Viento de los 240 grados a 12 nudos.",
          "Viento de los 120 grados a 15 nudos."
        ],
        answer: 1,
        explanation: "El token '09015KT' indica que el viento viene de la dirección 090° (Este) con una intensidad de 15 nudos."
      },
      {
        metar: "SPECI SABE 241530Z 27018G30KT 4000 TSRA FEW010 BKN030CB 15/09 Q1008 =",
        question: "¿Qué fenómenos significativos y nubes peligrosas se reportan en Aeroparque?",
        options: [
          "Neblina, viento calmo y nubes bajas escasas.",
          "Llovizna moderada con nubes potentes towering cumulus.",
          "Tormenta con lluvia, ráfagas de 30 nudos y cumulonimbus (CB).",
          "Lluvia fuerte con cielo despejado."
        ],
        answer: 2,
        explanation: "El reporte indica 'TSRA' (Tormenta con lluvia) con ráfagas de viento 'G30KT' (hasta 30 nudos) y nubes cumulonimbus 'BKN030CB'."
      },
      {
        metar: "METAR SAMM 101800Z 18005KT 9999 CLR 24/M02 Q1025 =",
        question: "¿Cuál es la temperatura y punto de rocío en Malargüe?",
        options: [
          "Temperatura 24°C y Punto de rocío -2°C.",
          "Temperatura 10°C y Punto de rocío 18°C.",
          "Temperatura 24°C y Punto de rocío 2°C.",
          "Temperatura 18°C y Punto de rocío -2°C."
        ],
        answer: 0,
        explanation: "El token '24/M02' decodifica como 24 grados Celsius de temperatura y la letra 'M' delante del 02 indica menos (temperatura bajo cero), por tanto -2°C de punto de rocío."
      },
      {
        metar: "METAR SAZS 152100Z VRB02KT 9999 FEW030 OVC090 08/07 Q1012 =",
        question: "Como piloto de planeador, el gradiente 08/07 (Temp/Rocío) indica:",
        options: [
          "Excelente día térmico para volar a gran altura.",
          "Muy baja humedad, cielo sin riesgo alguno.",
          "Alerta de niebla: el spread de 1°C indica alta probabilidad de niebla inmediata.",
          "Precipitación de granizo inminente."
        ],
        answer: 2,
        explanation: "Cuando la temperatura (8°C) y el punto de rocío (7°C) están a 2°C de diferencia o menos (spread ≤ 2°C), la humedad relativa es del 95% o superior, marcando un riesgo crítico de niebla rápida que podría cerrar el aeródromo."
      },
      {
        metar: "METAR SACO 051400Z 12006KT 2000 BR FG FEW005 SCT015 11/10 Q1022 =",
        question: "¿Cuál es la visibilidad horizontal reportada en Córdoba?",
        options: [
          "20 kilómetros.",
          "200 metros.",
          "1,200 metros.",
          "2,000 metros con presencia de neblina y niebla."
        ],
        answer: 3,
        explanation: "El token '2000' indica 2000 metros de visibilidad (2 km) y 'BR FG' decodifican como neblina (BR) y niebla (FG)."
      },
      {
        metar: "METAR SAEZ 231500Z 09007KT 9999 OVC025 12/08 Q1028 NOSIG RMK PP000 =",
        question: "¿Qué tipo de nubosidad y altura en pies reporta el token OVC025?",
        options: [
          "Cielo cubierto a 25,000 pies.",
          "Nubosidad escasa a 2,500 pies.",
          "Cielo cubierto a 2,500 pies.",
          "Nubes dispersas a 250 pies."
        ],
        answer: 2,
        explanation: "El token 'OVC' significa cielo cubierto (Overcast, 8/8) y el número '025' representa la altura en cientos de pies (25 x 100 = 2,500 pies)."
      },
      {
        type: "text",
        metar: "METAR SABE 231500Z 07007KT 9999 FEW027 13/06 Q1029 NOSIG RMK PP000 =",
        question: "Deletrea en alfabeto aeronáutico el identificador de estación 'SABE':",
        answer: ["Sierra-Alfa-Bravo-Eco", "Sierra Alfa Bravo Eco"],
        explanation: "El identificador de estación 'SABE' (Aeroparque) se lee utilizando el alfabeto fonético de la aviación como: Sierra-Alfa-Bravo-Eco."
      },
      {
        type: "text",
        metar: "SPECI SABE 241530Z 27018G30KT 4000 TSRA FEW010 BKN030CB 15/09 Q1008 =",
        question: "Ingresa el deletreo aeronáutico correspondiente para el código de nubes cumulonimbus 'CB':",
        answer: ["Charlie-Bravo", "Charly-Bravo", "Charlie Bravo", "Charly Bravo"],
        explanation: "El código de nubosidad peligrosa 'CB' (Cumulonimbus) se deletrea fonéticamente en aviación como Charlie-Bravo."
      },
      {
        type: "text",
        metar: "METAR SAZS 152100Z VRB02KT 9999 FEW030 OVC090 08/07 Q1012 =",
        question: "Deletrea en alfabeto aeronáutico el código de nubosidad escasa 'FEW':",
        answer: ["Foxtrot-Echo-Whiskey", "Foxtrot Echo Whiskey"],
        explanation: "El código de nubosidad 'FEW' (pocas nubes) se lee fonéticamente en aviación como Foxtrot-Echo-Whiskey."
      },
      {
        type: "text",
        metar: "METAR SACO 051400Z 12006KT 2000 BR FG FEW005 SCT015 11/10 Q1022 =",
        question: "Ingresa el deletreo aeronáutico correspondiente para el código de llovizna 'DZ':",
        answer: ["Delta-Zulu", "Delta Zulu"],
        explanation: "El código de precipitación 'DZ' (llovizna) se deletrea fonéticamente en aviación como Delta-Zulu."
      }
    ];
  }

  loadNewQuiz() {
    // Mezclar escenarios
    this.questions = [...this.scenarios].sort(() => 0.5 - Math.random());
    this.score = 0;
    this.currentQuestionIdx = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIdx];
  }

  submitAnswer(userAnswer) {
    const q = this.getCurrentQuestion();
    
    if (q.type === "text") {
      const normalize = (str) => {
        return str
          .toLowerCase()
          .trim()
          .replace(/[\s-]+/g, "-") // Reemplaza espacios y guiones con un guion simple
          .replace(/[^a-z0-9-]/g, ""); // Remueve otros caracteres no permitidos
      };
      
      const normalizedUser = normalize(userAnswer);
      let isCorrect = false;
      
      if (Array.isArray(q.answer)) {
        isCorrect = q.answer.some(ans => normalize(ans) === normalizedUser);
      } else {
        isCorrect = normalize(q.answer) === normalizedUser;
      }
      
      if (isCorrect) this.score++;
      
      return {
        isCorrect,
        explanation: q.explanation
      };
    } else {
      const isCorrect = q.answer === userAnswer;
      if (isCorrect) this.score++;

      return {
        isCorrect,
        correctIdx: q.answer,
        explanation: q.explanation
      };
    }
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    return this.currentQuestionIdx < this.questions.length;
  }
}

// --- GESTIÓN DE INTERFAZ Y ESTADO DE LA APP (DOM) ---
document.addEventListener("DOMContentLoaded", () => {
  // --- REGISTRO DEL SERVICE WORKER (PWA) ---
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const hadController = !!navigator.serviceWorker.controller;

      navigator.serviceWorker
        .register("./sw.js", { updateViaCache: "none" })
        .then((reg) => {
          console.log("Service Worker registrado con éxito:", reg.scope);
          
          // Verificar actualizaciones de inmediato al cargar la app
          reg.update();

          // Buscar actualizaciones periódicamente cada 5 minutos
          setInterval(() => {
            reg.update();
            console.log("[PWA] Verificando actualizaciones del Service Worker...");
          }, 5 * 60 * 1000);
        })
        .catch((err) => console.error("Fallo al registrar Service Worker:", err));

      // Escuchar cuando el nuevo Service Worker toma el control (skipWaiting + claim)
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (hadController && !refreshing) {
          refreshing = true;
          showPwaUpdateToast();
        }
      });
    });
  }

  // Función para mostrar el aviso de actualización
  function showPwaUpdateToast() {
    if (document.getElementById("pwa-update-toast")) return;

    const toast = document.createElement("div");
    toast.id = "pwa-update-toast";
    toast.className = "update-toast";
    toast.innerHTML = `
      <div class="update-toast-icon">🔄</div>
      <div class="update-toast-content">
        <span class="update-toast-title">Nueva actualización disponible</span>
        <span class="update-toast-desc">Toca actualizar para aplicar los cambios.</span>
      </div>
      <button class="update-toast-btn" id="pwa-update-reload-btn">Actualizar</button>
    `;

    document.body.appendChild(toast);

    // Animación de entrada
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    const reloadBtn = document.getElementById("pwa-update-reload-btn");
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  // --- MANEJO DE INSTALACIÓN PERSONALIZADA PWA ---
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installCard = document.getElementById("pwa-install-card");
    if (installCard) {
      installCard.classList.remove("hidden-element");
    }
  });

  const installBtn = document.getElementById("pwa-install-btn");
  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Usuario tomó la decisión de instalación: ${outcome}`);
        deferredPrompt = null;
        const installCard = document.getElementById("pwa-install-card");
        if (installCard) {
          installCard.classList.add("hidden-element");
        }
      }
    });
  }

  // Detectar iOS para mostrar guía de instalación manual de Safari
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (isIOS && !isStandalone) {
    const iosCard = document.getElementById("pwa-ios-card");
    if (iosCard) {
      iosCard.classList.remove("hidden-element");
    }
  }

  // Ocultar tarjeta si ya se instaló la app
  window.addEventListener("appinstalled", (evt) => {
    console.log("METAR Entrenador instalado en el dispositivo.");
    const installCard = document.getElementById("pwa-install-card");
    if (installCard) {
      installCard.classList.add("hidden-element");
    }
  });

  const quizEngine = new MetarQuiz();
  let currentParsedMetar = null;

  // Cargar lista de aeropuertos en la interfaz
  const firSelect = document.getElementById("fir-select");
  const airportContainer = document.getElementById("airport-grid");
  const metarTextInput = document.getElementById("metar-manual-input");
  const decodeBtn = document.getElementById("decode-btn");

  // Control de Modo de Consulta (FIR vs Manual)
  const modeFirBtn = document.getElementById("mode-fir-btn");
  const modeManualBtn = document.getElementById("mode-manual-btn");
  const modeFirContainer = document.getElementById("mode-fir-container");
  const modeManualContainer = document.getElementById("mode-manual-container");

  modeFirBtn.addEventListener("click", () => {
    modeFirBtn.classList.add("active");
    modeManualBtn.classList.remove("active");
    modeFirContainer.classList.remove("hidden-element");
    modeManualContainer.classList.add("hidden-element");
  });

  modeManualBtn.addEventListener("click", () => {
    modeManualBtn.classList.add("active");
    modeFirBtn.classList.remove("active");
    modeManualContainer.classList.remove("hidden-element");
    modeFirContainer.classList.add("hidden-element");
  });

  // --- LÓGICA DE LA GUÍA RÁPIDA INTERACTIVA (Deletreo fonético al tocar) ---
  function getAeronauticalSpelling(code) {
    const cleanCode = code.trim().toUpperCase();
    let spelledParts = [];
    for (let char of cleanCode) {
      if (AERONAUTICAL_ALPHABET[char]) {
        spelledParts.push(AERONAUTICAL_ALPHABET[char]);
      } else if (AERONAUTICAL_NUMBERS[char]) {
        const numSpelled = AERONAUTICAL_NUMBERS[char];
        spelledParts.push(numSpelled.charAt(0).toUpperCase() + numSpelled.slice(1));
      } else if (char === "-") {
        spelledParts.push("Menos");
      } else if (char === "+") {
        spelledParts.push("Más");
      } else {
        spelledParts.push(char);
      }
    }
    return spelledParts.join("-");
  }

  function renderQuickGuide(searchTerm = "") {
    const container = document.getElementById("cheat-sheet-dynamic-container");
    if (!container) return;

    container.innerHTML = "";

    const cheatGrid = document.createElement("div");
    cheatGrid.className = "cheat-grid-dynamic";

    let hasMatches = false;
    const searchLower = searchTerm.trim().toLowerCase();

    for (const [categoryName, items] of Object.entries(QUICK_GUIDE_DATABASE)) {
      const filteredItems = items.filter(item => {
        return item.code.toLowerCase().includes(searchLower) || 
               item.desc.toLowerCase().includes(searchLower);
      });

      if (filteredItems.length === 0) continue;
      hasMatches = true;

      const categoryDiv = document.createElement("div");
      categoryDiv.className = "cheat-category-block";

      const title = document.createElement("h3");
      title.className = "cheat-section-title";
      title.textContent = categoryName;
      categoryDiv.appendChild(title);

      const listDiv = document.createElement("div");
      listDiv.className = "cheat-list-dynamic";

      filteredItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cheat-item-dynamic";
        itemDiv.id = `guide-item-${item.code.replace(/[^a-zA-Z0-9-]/g, '')}`;
        itemDiv.style.cursor = "pointer";

        // Contenedor flex superior
        const topDiv = document.createElement("div");
        topDiv.className = "cheat-item-top";
        topDiv.style.display = "flex";
        topDiv.style.justifyContent = "space-between";
        topDiv.style.alignItems = "center";
        topDiv.style.width = "100%";

        const codeWrapper = document.createElement("div");
        codeWrapper.className = "cheat-code-wrapper";

        const codeSpan = document.createElement("span");
        codeSpan.className = "cheat-code";
        codeSpan.textContent = item.code;
        codeWrapper.appendChild(codeSpan);
        topDiv.appendChild(codeWrapper);

        const descSpan = document.createElement("span");
        descSpan.className = "cheat-desc";
        descSpan.textContent = item.desc;
        topDiv.appendChild(descSpan);

        itemDiv.appendChild(topDiv);

        // Contenedor del deletreo fonético (inicialmente oculto)
        const spellingDiv = document.createElement("div");
        spellingDiv.className = "cheat-spelling hidden-element";
        
        // Calcular deletreo
        const spellingText = getAeronauticalSpelling(item.code);
        spellingDiv.textContent = `🗣️ Se lee: ${spellingText}`;
        itemDiv.appendChild(spellingDiv);

        // Click para revelar/ocultar el deletreo
        itemDiv.addEventListener("click", () => {
          const isHidden = spellingDiv.classList.contains("hidden-element");
          
          // Cerrar otros abiertos para mantener la vista despejada
          document.querySelectorAll(".cheat-spelling").forEach(div => div.classList.add("hidden-element"));
          document.querySelectorAll(".cheat-item-dynamic").forEach(div => div.classList.remove("active-card"));

          if (isHidden) {
            spellingDiv.classList.remove("hidden-element");
            itemDiv.classList.add("active-card");
          }
        });

        listDiv.appendChild(itemDiv);
      });

      categoryDiv.appendChild(listDiv);
      cheatGrid.appendChild(categoryDiv);
    }

    if (!hasMatches) {
      const noResults = document.createElement("div");
      noResults.style.textAlign = "center";
      noResults.style.padding = "30px 10px";
      noResults.style.color = "var(--text-secondary)";
      noResults.style.fontSize = "13px";
      noResults.textContent = "❌ No se encontraron códigos que coincidan con la búsqueda.";
      container.appendChild(noResults);
    } else {
      container.appendChild(cheatGrid);
    }
  }

  // Registrar listeners para el input del buscador de la guía
  const guideSearchInput = document.getElementById("guide-search");
  if (guideSearchInput) {
    guideSearchInput.addEventListener("input", (e) => {
      renderQuickGuide(e.target.value);
    });
  }

  // Renderizado inicial por defecto
  renderQuickGuide("");

  // Rellenar selector de FIR
  firSelect.innerHTML = '<option value="-1">--- Selecciona una Región FIR ---</option>';
  for (const firName in AIRPORT_DATABASE) {
    const opt = document.createElement("option");
    opt.value = firName;
    opt.textContent = firName;
    firSelect.appendChild(opt);
  }

  // Cambio de FIR -> Mostrar aeródromos correspondientes
  firSelect.addEventListener("change", () => {
    const selectedFir = firSelect.value;
    airportContainer.innerHTML = "";

    if (selectedFir === "-1") return;

    const airports = AIRPORT_DATABASE[selectedFir];
    airports.forEach(apt => {
      const card = document.createElement("div");
      card.className = "airport-pill-card";
      card.innerHTML = `
        <div class="oaci-code">${apt.oaci}</div>
        <div class="apt-name-details">
          <div class="apt-title-name">${apt.name}</div>
          <div class="apt-city">${apt.city}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        // Al hacer click, cargamos su OACI en la barra de consulta y fetch
        metarTextInput.value = apt.oaci;
        fetchLiveMetar(apt.oaci);
      });

      airportContainer.appendChild(card);
    });
  });

  // Función auxiliar para consultar con reintentos utilizando proxies CORS redundantes
  async function fetchJsonWithFallback(targetUrl) {
    const proxies = [
      // 1. corsproxy.io (Excelente soporte CORS en navegadores)
      (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
      // 2. api.codetabs.com (Proxy de respaldo)
      (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
      // 3. api.allorigins.win (Proxy de respaldo)
      (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      // 4. Consulta directa (En caso de que CORS esté desactivado o permitido)
      (url) => url
    ];

    for (let i = 0; i < proxies.length; i++) {
      try {
        const proxiedUrl = proxies[i](targetUrl);
        const response = await fetch(proxiedUrl);
        
        // Si el estado es 204 (No Content), retornamos un arreglo vacío de inmediato
        if (response.status === 204) {
          return [];
        }

        if (response.ok) {
          const text = await response.text();
          if (!text || text.trim() === "") {
            return []; // Evita errores si el cuerpo de la respuesta está vacío
          }
          return JSON.parse(text);
        }
        console.warn(`Proxy ${i + 1} respondió con estado: ${response.status}`);
      } catch (e) {
        console.warn(`Fallo en proxy ${i + 1} para la URL: ${targetUrl}`, e);
      }
    }

    throw new Error("Todos los intentos de conexión y proxies CORS fallaron.");
  }

  // Consultar en NOAA API de forma remota utilizando proxies redundantes para garantizar estabilidad
  async function fetchLiveMetar(oaciCode) {
    showLoading(true);
    try {
      const targetUrl = `https://aviationweather.gov/api/data/metar?ids=${oaciCode.toUpperCase()}&format=json`;

      const data = await fetchJsonWithFallback(targetUrl);

      if (data && data.length > 0) {
        const rawMetar = data[0].rawOb;
        metarTextInput.value = rawMetar;
        decodeAndRenderMetar(rawMetar);
      } else {
        alert(`No se encontraron reportes en tiempo real para: ${oaciCode}. Intenta ingresar uno manual.`);
        showLoading(false);
      }
    } catch (err) {
      console.error("Error al obtener METAR en vivo:", err);
      alert("Hubo un error de conexión con la red al intentar obtener el reporte en vivo. Cambiando a entrada manual.");
      showLoading(false);
    }
  }

  decodeBtn.addEventListener("click", () => {
    const text = metarTextInput.value.trim();
    if (text) {
      decodeAndRenderMetar(text);
    } else {
      alert("Por favor ingresa un reporte METAR completo.");
    }
  });

  // Decodifica y renderiza todos los elementos y gráficos
  function decodeAndRenderMetar(metarString) {
    showLoading(true);

    setTimeout(() => {
      try {
        const parsed = MetarParser.parse(metarString);
        currentParsedMetar = parsed;

        // 1. Mostrar cabeceras y tarjetas
        document.getElementById("output-section").classList.remove("hidden-element");

        // Categoría de vuelo
        const catBadge = document.getElementById("flight-cat-badge");
        catBadge.textContent = parsed.flightCategory;
        catBadge.className = `flight-category-badge cat-${parsed.flightCategory.toLowerCase()}`;

        // Identidad de estación
        const apt = MetarParser.findAirportByOaci(parsed.station);
        document.getElementById("decoded-station-title").textContent = apt ? apt.name : `ESTACIÓN ${parsed.station}`;
        document.getElementById("decoded-station-subtitle").textContent = apt ? `${apt.city} • Región: ${apt.fir}` : `Código OACI: ${parsed.station}`;

        // 2. Tokenizador interactivo
        renderInteractiveTokens(parsed);

        // 3. Renderizar Gráficos de instrumentación
        const dir = parsed.wind ? parsed.wind.direction : null;
        const spd = parsed.wind ? parsed.wind.speed : null;
        const gst = parsed.wind ? parsed.wind.gusts : null;

        MetarGauges.drawWindCompass("wind-canvas", dir, spd, gst);
        MetarGauges.drawCloudLevels("clouds-canvas", parsed.clouds);

        if (parsed.tempDew) {
          document.getElementById("thermometer-container").classList.remove("hidden-element");
          MetarGauges.drawThermometer("thermometer-canvas", parsed.tempDew.temp, parsed.tempDew.dew);
          document.getElementById("humidity-value").textContent = `${parsed.tempDew.rh}%`;
          document.getElementById("spread-value").textContent = `${parsed.tempDew.temp - parsed.tempDew.dew}°C`;
        } else {
          document.getElementById("thermometer-container").classList.add("hidden-element");
        }



        // Scroll suave al resultado
        document.getElementById("output-section").scrollIntoView({ behavior: 'smooth' });

      } catch (err) {
        console.error(err);
        alert("Error al procesar el código METAR. Verifica la sintaxis.");
      } finally {
        showLoading(false);
      }
    }, 300);
  }

  // Crea la fila interactiva de tokens resaltables
  function renderInteractiveTokens(parsed) {
    const rawContainer = document.getElementById("raw-metar-tokenizer");
    const explanationList = document.getElementById("token-explanations-list");

    rawContainer.innerHTML = "";
    explanationList.innerHTML = "";

    parsed.tokenMap.forEach((tData, idx) => {
      // Elemento token visualizable
      const span = document.createElement("span");
      span.className = "interactive-token";
      span.textContent = tData.token;
      span.id = `token-span-${idx}`;
      rawContainer.appendChild(span);
      rawContainer.appendChild(document.createTextNode(" "));

      // Tarjeta de explicación correspondiente
      const card = document.createElement("div");
      card.className = "token-explanation-card";
      card.id = `token-card-${idx}`;
      card.innerHTML = `
        <div class="token-card-header">
          <span class="token-card-code">${tData.token}</span>
          <span class="token-card-title">${tData.title}</span>
        </div>
        <div class="token-card-body">${tData.decoded}</div>
      `;
      explanationList.appendChild(card);

      // Eventos interactivos (Hover / Tap) bidireccionales
      const highlight = () => {
        // Deseleccionar previos
        document.querySelectorAll(".interactive-token").forEach(s => s.classList.remove("token-active"));
        document.querySelectorAll(".token-explanation-card").forEach(c => c.classList.remove("card-active"));

        span.classList.add("token-active");
        card.classList.add("card-active");
      };

      span.addEventListener("click", () => {
        highlight();
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      card.addEventListener("click", () => {
        highlight();
        span.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  // --- CONTROLES DE NAVEGACIÓN Y TABS ---
  const navButtons = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".app-view");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.getAttribute("data-view");

      navButtons.forEach(b => b.classList.remove("nav-active"));
      views.forEach(v => v.classList.add("hidden-element"));

      btn.classList.add("nav-active");
      document.getElementById(targetView).classList.remove("hidden-element");

      // Si entramos al Quiz, cargamos preguntas
      if (targetView === "view-quiz") {
        initQuizGame();
      }

      // Si entramos a la Guía Rápida, renderizamos los códigos
      if (targetView === "view-guide") {
        renderQuickGuide(guideSearchInput ? guideSearchInput.value : "");
      }
    });
  });

  // --- LOGICA DEL JUEGO QUIZ ---
  const quizQuestionText = document.getElementById("quiz-question");
  const quizMetarCode = document.getElementById("quiz-metar");
  const quizOptionsList = document.getElementById("quiz-options");
  const quizExplanationCard = document.getElementById("quiz-explanation-card");
  const quizExplanationText = document.getElementById("quiz-explanation");
  const quizNextBtn = document.getElementById("quiz-next-btn");
  const quizScoreDisplay = document.getElementById("quiz-score-val");

  function initQuizGame() {
    quizEngine.loadNewQuiz();
    quizExplanationCard.classList.add("hidden-element");
    showQuestion();
  }

  function showQuestion() {
    quizExplanationCard.classList.add("hidden-element");
    quizNextBtn.classList.add("hidden-element");
    quizOptionsList.innerHTML = "";

    const q = quizEngine.getCurrentQuestion();
    quizQuestionText.textContent = q.question;
    quizMetarCode.textContent = q.metar;
    quizScoreDisplay.textContent = `${quizEngine.score} / ${quizEngine.questions.length}`;

    if (q.type === "text") {
      // Pregunta táctil interactiva tipo entrada de texto
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "quiz-input-wrapper";
      inputWrapper.style.display = "flex";
      inputWrapper.style.flexDirection = "column";
      inputWrapper.style.gap = "12px";
      inputWrapper.style.marginTop = "10px";

      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.className = "styled-textarea";
      textInput.style.height = "48px";
      textInput.style.fontFamily = "var(--font-body)";
      textInput.style.fontSize = "15px";
      textInput.placeholder = "Escribe el deletreo (ej: Alfa-Bravo)...";
      textInput.autofocus = true;
      inputWrapper.appendChild(textInput);

      const submitBtn = document.createElement("button");
      submitBtn.className = "btn-primary";
      submitBtn.style.padding = "14px";
      submitBtn.style.width = "100%";
      submitBtn.textContent = "✔️ Verificar Respuesta";
      submitBtn.type = "button";
      inputWrapper.appendChild(submitBtn);

      quizOptionsList.appendChild(inputWrapper);

      // Evento al presionar Enter en el teclado
      textInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && textInput.value.trim() !== "") {
          e.preventDefault();
          submitBtn.click();
        }
      });

      submitBtn.addEventListener("click", () => {
        const val = textInput.value.trim();
        if (!val) {
          alert("Por favor, escribe una respuesta.");
          return;
        }

        textInput.disabled = true;
        submitBtn.disabled = true;

        const result = quizEngine.submitAnswer(val);

        if (result.isCorrect) {
          textInput.classList.add("option-correct");
          
          const successHint = document.createElement("div");
          successHint.style.fontSize = "12px";
          successHint.style.color = "#16a34a";
          successHint.style.fontWeight = "600";
          successHint.style.marginTop = "4px";
          successHint.textContent = `✔️ ¡Excelente! Respuesta correcta.`;
          inputWrapper.appendChild(successHint);
        } else {
          textInput.classList.add("option-wrong");
          
          const errorHint = document.createElement("div");
          errorHint.style.fontSize = "12px";
          errorHint.style.color = "#dc2626";
          errorHint.style.fontWeight = "600";
          errorHint.style.marginTop = "4px";
          const expectedAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer;
          errorHint.textContent = `❌ Incorrecto. Respuesta esperada: ${expectedAnswer}`;
          inputWrapper.appendChild(errorHint);
        }

        // Mostrar explicación
        quizExplanationCard.classList.remove("hidden-element");
        quizExplanationText.textContent = result.explanation;
        quizScoreDisplay.textContent = `${quizEngine.score} / ${quizEngine.questions.length}`;

        quizNextBtn.classList.remove("hidden-element");
      });
    } else {
      // Pregunta clásica de opción múltiple
      q.options.forEach((opt, idx) => {
        const li = document.createElement("button");
        li.className = "quiz-option-btn";
        li.textContent = opt;
        li.addEventListener("click", () => selectQuizAnswer(idx));
        quizOptionsList.appendChild(li);
      });
    }
  }

  function selectQuizAnswer(selectedIndex) {
    const buttons = quizOptionsList.querySelectorAll(".quiz-option-btn");

    // Deshabilitar todos los botones para que no cambien el voto
    buttons.forEach(b => b.disabled = true);

    const result = quizEngine.submitAnswer(selectedIndex);

    buttons.forEach((b, idx) => {
      if (idx === result.correctIdx) {
        b.classList.add("option-correct");
      } else if (idx === selectedIndex) {
        b.classList.add("option-wrong");
      }
    });

    // Mostrar explicación
    quizExplanationCard.classList.remove("hidden-element");
    quizExplanationText.textContent = result.explanation;
    quizScoreDisplay.textContent = `${quizEngine.score} / ${quizEngine.questions.length}`;

    quizNextBtn.classList.remove("hidden-element");
  }

  quizNextBtn.addEventListener("click", () => {
    if (quizEngine.nextQuestion()) {
      showQuestion();
    } else {
      alert(`¡Juego terminado! Puntuación final: ${quizEngine.score} de ${quizEngine.questions.length} respuestas correctas.`);
      initQuizGame();
    }
  });

  // Utilidades de carga
  function showLoading(show) {
    const loader = document.getElementById("app-loader");
    if (loader) {
      if (show) loader.classList.remove("hidden-element");
      else loader.classList.add("hidden-element");
    }
  }

  // Pre-cargar el valor en el input para que tenga un ejemplo, pero mantener la interfaz limpia al inicio
  metarTextInput.value = "METAR SABE 231500Z 07007KT 9999 FEW027 13/06 Q1029 NOSIG RMK PP000 =";
});
