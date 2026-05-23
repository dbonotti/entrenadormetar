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
      
      // 5. Viento (Dirección, velocidad, ráfagas, variabilidad)
      // Patrones: 18010KT, 23015G25KT, VRB02KT, 180V240
      else if (!result.wind && (/^\d{5}(G\d{2})?KT$/.test(token) || /^VRB\d{2}KT$/.test(token) || /^\d{3}V\d{3}$/.test(token))) {
        if (/^\d{3}V\d{3}$/.test(token)) {
          // Variabilidad de dirección (ej: 180V240)
          const parts = token.split("V");
          decodedText = `Dirección del viento varía entre los ${parts[0]}° y los ${parts[1]}°`;
          title = "Variabilidad del Viento";
        } else {
          const dirStr = token.substring(0, 3);
          const isVrb = dirStr === "VRB";
          const speed = parseInt(token.substring(3, 5));
          
          let gusts = null;
          let gustIdx = token.indexOf("G");
          if (gustIdx !== -1) {
            gusts = parseInt(token.substring(gustIdx + 1, gustIdx + 3));
          }

          result.wind = {
            direction: isVrb ? "VRB" : parseInt(dirStr),
            speed: speed,
            gusts: gusts
          };

          const dirText = isVrb ? "de dirección variable" : `de los ${dirStr}°`;
          const speedText = `${speed} nudos (KT)${gusts ? ` con ráfagas de hasta ${gusts} nudos` : ""}`;
          
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
        }
        isMatched = true;
      }
      
      // 6. Visibilidad (Metros, Millas, CAVOK)
      else if (!result.visib && (token === "CAVOK" || /^\d{4}$/.test(token) || /^\d+(\/\d+)?SM$/.test(token))) {
        if (token === "CAVOK") {
          result.visib = { value: 9999, cavok: true };
          decodedText = "CAVOK (Ceiling And Visibility OK): Visibilidad superior a 10 km, sin nubes por debajo de 5,000 pies o del sector mínimo de seguridad, sin cumulonimbus (CB) ni towering cumulus (TCU), y sin fenómenos significativos en el aeródromo.";
          title = "Visibilidad y Techo OK";
        } else if (/^\d{4}$/.test(token)) {
          const meters = parseInt(token);
          result.visib = { value: meters, cavok: false };
          if (meters === 9999) {
            decodedText = "Visibilidad de 10 kilómetros o más (Condiciones visuales excelentes)";
          } else {
            decodedText = `Visibilidad horizontal de ${meters} metros (${(meters/1000).toFixed(1)} km)`;
            if (meters < 1500) {
              decodedText += " ⚠️ ¡Alerta! Visibilidad reducida. Operación IFR obligatoria para aviones de motor, prohibido vuelo de planeadores sin habilitación especial.";
            }
          }
          title = "Visibilidad";
        } else {
          // Millas terrestres (EE.UU)
          result.visib = { value: token, cavok: false };
          decodedText = `Visibilidad de ${token.replace("SM", "")} millas terrestres (Statute Miles)`;
          title = "Visibilidad";
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
        result.weather.push({ token, decoded: phenText });
        decodedText = `Fenómenos meteorológicos activos: ${phenText}`;
        title = "Fenómeno";
        isMatched = true;
      }
      
      // 8. Capas de Nubes (ej. FEW025, SCT040CB, BKN080, NSC, CLR)
      else if (token === "NSC" || token === "NCD" || token === "CLR" || token === "SKC" || /^(FEW|SCT|BKN|OVC|VV)\d{3}(CB|TCU)?$/.test(token)) {
        if (token === "NSC") {
          decodedText = METAR_DICTIONARY.NSC;
          result.clouds.push({ token, type: "NSC", height: null, special: null, decoded: decodedText });
        } else if (token === "CLR" || token === "SKC" || token === "NCD") {
          decodedText = METAR_DICTIONARY[token] || "Cielo despejado";
          result.clouds.push({ token, type: "CLR", height: null, special: null, decoded: decodedText });
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

          decodedText = `${METAR_DICTIONARY[type]} a una altura de ${heightFt.toLocaleString()} pies (${Math.round(heightFt * 0.3048)} metros)${specialText}`;
          result.clouds.push({ token, type, height: heightFt, special, decoded: decodedText });
        }
        title = "Nubosidad";
        isMatched = true;
      }
      
      // 9. Temperatura y Punto de Rocío (ej. 12/08, M03/M05)
      else if (!result.tempDew && /^(M?\d{2})\/(M?\d{2})$/.test(token)) {
        const parts = token.split("/");
        
        const parseTemp = (s) => s.startsWith("M") ? -parseInt(s.substring(1)) : parseInt(s);
        const temp = parseTemp(parts[0]);
        const dew = parseTemp(parts[1]);
        
        // Calcular humedad relativa aproximada usando la fórmula de Magnus-Tetens
        const spread = temp - dew;
        const rh = Math.round(100 - (5 * spread)); // Regla empírica del spread de 5% por grado

        result.tempDew = { temp, dew, rh };
        
        let fogWarning = "";
        if (spread <= 2 && spread >= 0) {
          fogWarning = " ⚠️ ¡Alerta de Niebla! Gradiente térmico muy bajo (≤ 2°C). Alta probabilidad de reducción de visibilidad en minutos por formación de niebla por radiación o advección.";
        }

        decodedText = `Temperatura del aire: ${temp}°C | Punto de Rocío: ${dew}°C (Humedad relativa aprox: ${Math.max(0, Math.min(100, rh))}%).${fogWarning}`;
        title = "Temperatura y Rocío";
        isMatched = true;
      }
      
      // 10. Altimímetro / QNH (ej. Q1028, A2992)
      else if (!result.altimeter && (/^Q\d{4}$/.test(token) || /^A\d{4}$/.test(token))) {
        if (token.startsWith("Q")) {
          const qnh = parseInt(token.substring(1));
          result.altimeter = { value: qnh, unit: "hPa" };
          decodedText = `Presión barométrica QNH: ${qnh} Hectopascales (hPa). Calibración del altímetro para leer la altura real sobre el nivel medio del mar.`;
        } else {
          const inhg = parseFloat(token.substring(1)) / 100;
          result.altimeter = { value: inhg, unit: "inHg" };
          decodedText = `Presión barométrica altímetro: ${inhg.toFixed(2)} pulgadas de Mercurio (inHg). Usado comúnmente en Norteamérica.`;
        }
        title = "QNH / Altimímetro";
        isMatched = true;
      }
      
      // 11. Cambios / Tendencias (NOSIG)
      else if (token === "NOSIG") {
        result.trend = "NOSIG";
        decodedText = "NOSIG (No Significant Change): No se pronostican cambios significativos en las condiciones climáticas en las próximas 2 horas.";
        title = "Tendencia de Clima";
        isMatched = true;
      }
      
      // 12. Remarks argentinos o especiales (RMK PP000)
      else if (token.startsWith("RMK") || (tIdx > 0 && tokens[tIdx - 1] === "RMK") || (tIdx > 1 && tokens[tIdx - 2] === "RMK" && token.startsWith("PP"))) {
        if (token === "RMK") {
          decodedText = "RMK (Remarks): Inicio de la sección de comentarios o notas adicionales específicas del país.";
          title = "Inicio de Comentarios";
        } else if (/^PP\d{3}$/.test(token)) {
          const mm = parseInt(token.substring(2));
          decodedText = `PP (Precipitación): Precipitación acumulada en la última hora de ${mm} mm. (Nota específica del Servicio Meteorológico Nacional de Argentina).`;
          title = "Lluvia Acumulada";
        } else {
          decodedText = `Información adicional de remark del operador: ${token}`;
          title = "Nota Adicional";
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

// --- GENERADOR DE AUDIO ATIS REALISTA ---
class AtisSpeechEngine {
  constructor() {
    this.speechSynth = window.speechSynthesis;
    this.audioCtx = null;
  }

  // Genera estática realista al inicio y fin (Squelch)
  async playSquelchSound() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      const bufferSize = ctx.sampleRate * 0.15; // 150ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Llenar buffer con ruido blanco
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      // Filtro para hacerlo sonar metálico y áspero
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1000;
      filter.Q.value = 2.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      noise.start();
    } catch (e) {
      console.warn("AudioContext no disponible o bloqueado por el navegador:", e);
    }
  }

  // Convierte un METAR decodificado a texto hablado aeronáutico
  generateSpeechText(parsed) {
    let t = [];
    
    // 1. Cabecera e Identificación
    const apt = MetarParser.findAirportByOaci(parsed.station);
    const stationName = apt ? apt.name : parsed.station;
    
    // Deletrear identificador
    let spelledStation = "";
    for (let char of parsed.station) {
      spelledStation += (AERONAUTICAL_ALPHABET[char] || char) + " ";
    }

    t.push(`Información meteorológica de ${stationName}, identificador, ${spelledStation}.`);
    
    // 2. Fecha y Hora
    if (parsed.dateTime) {
      t.push(`Observación del día, ${this.spellNumbers(parsed.dateTime.day)}, a las, ${this.spellNumbers(parsed.dateTime.hour)} ${this.spellNumbers(parsed.dateTime.min)} UTC.`);
    }

    if (parsed.auto) t.push("Reporte automático.");

    // 3. Viento
    if (parsed.wind) {
      if (parsed.wind.direction === "VRB") {
        t.push(`Viento de dirección variable con velocidad de ${this.spellNumbers(parsed.wind.speed.toString())} nudos.`);
      } else if (parsed.wind.speed === 0) {
        t.push("Viento en calma.");
      } else {
        const dirSpelled = this.spellNumbers(parsed.wind.direction.toString().padStart(3, "0"));
        const speedSpelled = this.spellNumbers(parsed.wind.speed.toString());
        t.push(`Viento de los, ${dirSpelled} grados, con, ${speedSpelled} nudos.`);
        if (parsed.wind.gusts) {
          t.push(`Ráfagas máximas de, ${this.spellNumbers(parsed.wind.gusts.toString())} nudos.`);
        }
      }
    } else {
      t.push("Viento no reportado.");
    }

    // 4. Visibilidad
    if (parsed.visib) {
      if (parsed.visib.cavok) {
        t.push("Condiciones de visibilidad y techo ilimitados. Cabok.");
      } else if (typeof parsed.visib.value === "number") {
        if (parsed.visib.value === 9999) {
          t.push("Visibilidad, diez kilómetros o más.");
        } else {
          t.push(`Visibilidad horizontal, ${parsed.visib.value} metros.`);
        }
      }
    }

    // 5. Fenómenos significativos
    if (parsed.weather.length > 0) {
      t.push("Condiciones meteorológicas presentes:");
      parsed.weather.forEach(w => {
        t.push(`${w.decoded}.`);
      });
    }

    // 6. Nubosidad
    if (parsed.clouds.length > 0) {
      let isClear = false;
      parsed.clouds.forEach(c => {
        if (c.type === "CLR" || c.type === "SKC" || c.type === "NCD" || c.type === "NSC") {
          isClear = true;
        }
      });
      
      if (isClear) {
        t.push("Cielo despejado.");
      } else {
        t.push("Capa de nubes reportada:");
        parsed.clouds.forEach(c => {
          let typeEs = "";
          if (c.type === "FEW") typeEs = "escasa nubosidad";
          else if (c.type === "SCT") typeEs = "nubosidad dispersa";
          else if (c.type === "BKN") typeEs = "cielo mayormente nublado";
          else if (c.type === "OVC") typeEs = "cielo completamente cubierto";
          else if (c.type === "VV") typeEs = "visibilidad vertical";

          const htText = c.height ? `${this.spellNumbers(c.height.toString())} pies` : "";
          const specText = c.special === "CB" ? "cumulonimbus en desarrollo" : c.special === "TCU" ? "cúmulus potente" : "";

          t.push(`${typeEs} a, ${htText}, ${specText}.`);
        });
      }
    }

    // 7. Temperatura y Rocío
    if (parsed.tempDew) {
      const parseSpelledTemp = (val) => {
        if (val < 0) return `menos ${this.spellNumbers(Math.abs(val).toString())}`;
        return this.spellNumbers(val.toString());
      };
      const tSpelled = parseSpelledTemp(parsed.tempDew.temp);
      const dSpelled = parseSpelledTemp(parsed.tempDew.dew);
      t.push(`Temperatura, ${tSpelled} grados. Punto de rocío, ${dSpelled} grados.`);
    }

    // 8. Barómetro QNH
    if (parsed.altimeter) {
      if (parsed.altimeter.unit === "hPa") {
        t.push(`Q N H, ${this.spellNumbers(parsed.altimeter.value.toString())} hectopascales.`);
      } else {
        t.push(`Ajuste altimétrico, ${this.spellNumbers(parsed.altimeter.value.toFixed(2).replace(".", ""))} pulgadas.`);
      }
    }

    // 9. Tendencia
    if (parsed.trend === "NOSIG") {
      t.push("Sin cambios significativos para las próximas dos horas.");
    }

    t.push("Fin del reporte de torre.");
    return t.join(" ");
  }

  spellNumbers(str) {
    let spelled = [];
    for (let char of str) {
      spelled.push(AERONAUTICAL_NUMBERS[char] || char);
    }
    return spelled.join(" ");
  }

  // Ejecuta la lectura de voz con efectos de radio
  speak(textSpoken, onStart, onEnd) {
    if (!this.speechSynth) return;
    
    this.speechSynth.cancel(); // Cancelar cualquier audio previo
    
    this.playSquelchSound();
    
    const utterance = new SpeechSynthesisUtterance(textSpoken);
    
    // Intentar buscar una voz en español de Argentina o España
    const voices = this.speechSynth.getVoices();
    let preferredVoice = voices.find(voice => voice.lang.includes('es-AR')) ||
                         voices.find(voice => voice.lang.includes('es-ES')) ||
                         voices.find(voice => voice.lang.startsWith('es'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.lang = 'es-AR';
    utterance.rate = 0.85; // Hablar pausado y claro como torre de control
    utterance.pitch = 0.95; // Un tono de radio ligeramente más ronco

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.playSquelchSound();
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.error("Error en sintetizador de voz:", e);
      if (onEnd) onEnd();
    };

    // Pequeño delay de 200ms para arrancar después de la estática inicial
    setTimeout(() => {
      this.speechSynth.speak(utterance);
    }, 200);
  }

  stop() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
      this.playSquelchSound();
    }
  }
}

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
      const angleRad = (direction - 90) * Math.PI / 180;

      // 1. Dibujar la flecha apuntando DESDE donde viene el viento hacia el centro
      // El viento viene desde el ángulo indicado y viaja al opuesto
      const fromX = cx + Math.cos(angleRad) * (radius - 30);
      const fromY = cy + Math.sin(angleRad) * (radius - 30);
      
      // Dibujar flecha indicadora
      ctx.strokeStyle = "#1d4ed8";
      ctx.fillStyle = "#1d4ed8";
      ctx.lineWidth = 3.5;
      
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      // Cabeza de la flecha en el centro
      const arrowSize = 10;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angleRad + 2.5) * arrowSize, cy + Math.sin(angleRad + 2.5) * arrowSize);
      ctx.lineTo(cx + Math.cos(angleRad - 2.5) * arrowSize, cy + Math.sin(angleRad - 2.5) * arrowSize);
      ctx.closePath();
      ctx.fill();

      // 2. Dibujar manga de viento animada en la dirección opuesta al viento
      const windSockAngle = (direction + 90) * Math.PI / 180; // Apunta hacia adelante
      
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(windSockAngle);

      // Dibujar poste de la manga
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -25);
      ctx.stroke();

      // Aro de soporte de la manga
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(0, -25, 4, 0, Math.PI * 2);
      ctx.fill();

      // Manga de viento inflada según velocidad del viento
      // A más nudos, más horizontal. 0 KT = caída total. >= 15 KT = 100% horizontal.
      const factor = Math.min(1.0, speed / 15);
      const droop = (1.0 - factor) * 20; // Caída de la manga
      const len = 35; // Largo

      ctx.lineWidth = 1;
      
      // Dibujar 4 franjas rojas y blancas de la manga de viento
      const segments = [
        { color: "#dc2626", w1: 8, w2: 7, l: 0 },
        { color: "#ffffff", w1: 7, w2: 6, l: segmentLength(1) },
        { color: "#dc2626", w1: 6, w2: 5, l: segmentLength(2) },
        { color: "#ffffff", w1: 5, w2: 3, l: segmentLength(3) }
      ];

      function segmentLength(i) { return (len / 4) * i; }

      ctx.beginPath();
      
      // Dibujar segmentos con distorsión por caída (droop)
      segments.forEach((seg, index) => {
        const x1 = index * (len / 4);
        const y1 = -25 + (droop * Math.pow(index / 4, 2));
        const x2 = (index + 1) * (len / 4);
        const y2 = -25 + (droop * Math.pow((index + 1) / 4, 2));
        
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

    // Líneas de escala de altura (Pies: 0, 1000, 2000, 5000, 10000)
    const levels = [
      { feet: 10000, y: 30 },
      { feet: 7000, y: 70 },
      { feet: 4000, y: 120 },
      { feet: 2000, y: 170 },
      { feet: 500, y: 220 },
      { feet: 0, y: 245 }
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
      if (ft <= 0) return 245;
      if (ft >= 10000) return 30;
      
      // Encontrar segmento
      for (let i = 0; i < levels.length - 1; i++) {
        const top = levels[i];
        const bot = levels[i+1];
        if (ft <= top.feet && ft >= bot.feet) {
          const ratio = (ft - bot.feet) / (top.feet - bot.feet);
          return bot.y - ratio * (bot.y - top.y);
        }
      }
      return 245;
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
          // Forma de yunque gigante
          ctx.moveTo(100, cyY + 15);
          ctx.bezierCurveTo(90, cyY - 20, 130, cyY - 50, 180, cyY - 40);
          ctx.bezierCurveTo(220, cyY - 50, 270, cyY - 45, 290, cyY - 10);
          ctx.bezierCurveTo(310, cyY + 10, 280, cyY + 30, 240, cyY + 25);
          ctx.bezierCurveTo(220, cyY + 35, 140, cyY + 35, 100, cyY + 15);
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
          ctx.moveTo(170, cyY + 25);
          ctx.lineTo(165, cyY + 40);
          ctx.lineTo(175, cyY + 45);
          ctx.lineTo(170, cyY + 60);
          ctx.stroke();

          ctx.fillStyle = "#b91c1c";
          ctx.font = "bold 9px Outfit";
          ctx.fillText("CB (Cumulonimbus)", 200, cyY - 15);
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

        // Etiqueta de la capa
        ctx.fillStyle = "#0f172a";
        ctx.font = "bold 10px Outfit";
        ctx.fillText(`${cloud.type} @ ${cloud.height.toLocaleString()} ft`, width - 110, cyY - 12);
      }
    });

    if (!hasActualClouds) {
      ctx.fillStyle = "#0369a1";
      ctx.textAlign = "center";
      ctx.font = "bold 13px Outfit";
      ctx.fillText("SIN NUBES SIGNIFICATIVAS / CELESTE DESPEJADO", width / 2 + 20, height / 2);
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
    ctx.moveTo(w/2, 20);
    ctx.lineTo(w/2, h - 20);
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
      ctx.moveTo(w/2 - 12, y);
      ctx.lineTo(w/2 - 4, y);
      ctx.stroke();
      
      ctx.fillStyle = t <= 0 ? "#1d4ed8" : "#dc2626";
      ctx.fillText(`${t}°`, w/2 - 16, y);
    }

    // Dibujar marca de temperatura real (Rojo)
    const yT = tempToY(temp);
    ctx.fillStyle = "#dc2626";
    ctx.beginPath();
    ctx.arc(w/2, yT, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    ctx.textAlign = "left";
    ctx.fillStyle = "#b91c1c";
    ctx.font = "bold 12px Outfit";
    ctx.fillText(`TEMP: ${temp}°C`, w/2 + 15, yT);

    // Dibujar marca de punto de rocío (Azul)
    const yD = tempToY(dew);
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.arc(w/2, yD, 7, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#1d4ed8";
    ctx.font = "bold 11px Outfit";
    ctx.fillText(`ROCÍO: ${dew}°C`, w/2 + 15, yD + 2);
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

  submitAnswer(answerIdx) {
    const q = this.getCurrentQuestion();
    const isCorrect = q.answer === answerIdx;
    if (isCorrect) this.score++;
    
    return {
      isCorrect,
      correctIdx: q.answer,
      explanation: q.explanation
    };
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    return this.currentQuestionIdx < this.questions.length;
  }
}

// --- GESTIÓN DE INTERFAZ Y ESTADO DE LA APP (DOM) ---
document.addEventListener("DOMContentLoaded", () => {
  const speechEngine = new AtisSpeechEngine();
  const quizEngine = new MetarQuiz();
  let currentParsedMetar = null;

  // Cargar lista de aeropuertos en la interfaz
  const firSelect = document.getElementById("fir-select");
  const airportContainer = document.getElementById("airport-grid");
  const metarTextInput = document.getElementById("metar-manual-input");
  const decodeBtn = document.getElementById("decode-btn");
  const liveFetchBtn = document.getElementById("live-fetch-btn");

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

  // Preparar el motor de Voz ATIS de forma global
  const playVoiceBtn = document.getElementById("play-atis-btn");
  const stopVoiceBtn = document.getElementById("stop-atis-btn");
  
  playVoiceBtn.addEventListener("click", () => {
    if (!currentParsedMetar) {
      alert("Por favor, primero consulta o decodifica un reporte METAR en la pestaña 'Consulta' para escuchar el ATIS.");
      return;
    }
    const speechText = speechEngine.generateSpeechText(currentParsedMetar);
    
    playVoiceBtn.classList.add("btn-playing");
    playVoiceBtn.textContent = "🔊 Emitiendo ATIS...";
    
    speechEngine.speak(speechText, null, () => {
      playVoiceBtn.classList.remove("btn-playing");
      playVoiceBtn.textContent = "📻 Escuchar ATIS (Audio)";
    });
  });

  stopVoiceBtn.addEventListener("click", () => {
    speechEngine.stop();
    playVoiceBtn.classList.remove("btn-playing");
    playVoiceBtn.textContent = "📻 Escuchar ATIS (Audio)";
  });

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
    // 1. Primer intento: api.codetabs.com (Proxy CORS muy rápido y confiable)
    try {
      const codetabsUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`;
      const response = await fetch(codetabsUrl);
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.warn("Fallo en proxy CodeTabs, intentando AllOrigins...", e);
    }

    // 2. Segundo intento: api.allorigins.win (Proxy CORS de respaldo)
    try {
      const allOriginsUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
      const response = await fetch(allOriginsUrl);
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.warn("Fallo en proxy AllOrigins, intentando consulta directa...", e);
    }

    // 3. Tercer intento: Consulta directa (Por si acaso el entorno tiene CORS desactivado o permite peticiones directas)
    try {
      const response = await fetch(targetUrl);
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.error("Todos los intentos de conexión fallaron:", e);
      throw e;
    }
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
      alert("Por favor ingresa un código METAR válido o el código OACI de un aeropuerto.");
    }
  });

  liveFetchBtn.addEventListener("click", () => {
    const text = metarTextInput.value.trim();
    if (text.length === 4) {
      fetchLiveMetar(text);
    } else {
      alert("Para consulta automática, ingresa exactamente las 4 letras del código OACI (ej. SABE, SAEZ).");
    }
  });

  // Decodifica y renderiza todos los elementos y gráficos
  function decodeAndRenderMetar(metarString) {
    showLoading(true);
    
    // Si metarString es solo un código OACI de 4 letras, buscar en NOAA
    if (/^[A-Za-z]{4}$/.test(metarString.trim())) {
      fetchLiveMetar(metarString.trim());
      return;
    }

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

    q.options.forEach((opt, idx) => {
      const li = document.createElement("button");
      li.className = "quiz-option-btn";
      li.textContent = opt;
      li.addEventListener("click", () => selectQuizAnswer(idx));
      quizOptionsList.appendChild(li);
    });
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
