// const getConnexysFields = () => {
//   const mapping = [...document.querySelectorAll("div.cxsrecField")]
//     .map((div) => {
//       const input = div.querySelector("input,select,textarea,.ql-editor");
//       if (!input) return null;
//       const name = div
//         .querySelector("span.slds-form-element__label")
//         .childNodes[1].textContent.trim();

//       let value;
//       if (input.matches(".ql-editor")) {
//         // RichText magic
//         value = input.innerText
//           .replaceAll("\n\n\n\n\n", "\n\n\n\n")
//           .replaceAll("\n\n", "\n");
//       } else if (input.matches('input[type="checkbox"]')) {
//         value = input.checked ? input.value : null;
//       } else {
//         value = input.value;
//       }

//       // Group educations and workexperiences
//       let section = null;
//       if (div.closest(".cvSection-Educations")) section = "education";
//       if (div.closest(".cvSection-WorkExperiences")) section = "work";
//       return {
//         section,
//         name,
//         value,
//       };
//     })
//     .filter((x) => x)
//     .reduce(
//       (map, { section, name, value }) => {
//         if (section) {
//           // If field was found before, create a new workexperience / education block
//           if (name in map[section][map[section].length - 1])
//             map[section].push({});
//           map[section][map[section].length - 1][name] = value;
//         } else {
//           map[name] = value;
//         }
//         return map;
//       },
//       { education: [{}], work: [{}] }
//     );
//   mapping.education = mapping.education.slice(
//     Math.ceil(mapping.education.length / 2)
//   );
//   mapping.work = mapping.work.slice(Math.ceil(mapping.work.length / 2));
//   return mapping;
// };

// getConnexysFields();

data = {
  education: [
    {
      Niveau: "",
      Opleiding: "Handvaardigheidstraining TIG lassen",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2020",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "NEN 50110",
      Instituut: "",
      Startdatum: "",
      Einddatum: "",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "NEN1010",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2001",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "STEK",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2001",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "NEN 3140",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 1996",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "Toegepaste automatisering in de koeltechniek (TAK)",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2001",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Toegepaste automatisering in de koeltechniek",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2002",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Ontwerp van koeltechnische installaties",
      Instituut: "KT-C",
      Startdatum: "",
      Einddatum: "30 jun. 2002",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Ontwerp v/d rege",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2004",
      "Overige informatie":
        "Ontwerp v/d regel-, besturing-, en beveiligingsstrategie voor de Klimaattechniek",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Koelinstallaties categorie 1 (STEK)",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2005",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "BHV",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2010",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "TIG-Lassen",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2020",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "VOL-VCA",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2021",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "Certificaat Brandbestrijding en Ontruiming",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2020",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Heftruck",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2019",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Niveau 1 TIG RVS",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2020",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Koelinstallaties categorie 1",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 2010",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "STEK-Monteur (E06680)",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 1996",
      "Overige informatie": "",
      "Is certificaat": "on",
    },
    {
      Niveau: "",
      Opleiding: "Koeltechnicus",
      Instituut: "SBC Elsevier Opleidingen",
      Startdatum: "",
      Einddatum: "30 jun. 2002",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Praktijktraining Koeltechniek",
      Instituut: "KTB",
      Startdatum: "",
      Einddatum: "30 jun. 2002",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding: "Koudetechniek Algemeen (KTA)",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 1995",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "MBO",
      Opleiding: "Elektrotechniek",
      Instituut: "",
      Startdatum: "",
      Einddatum: "30 jun. 1988",
      "Overige informatie": "",
      "Is certificaat": null,
    },
    {
      Niveau: "",
      Opleiding:
        "Ontwerp v/d regel-, besturing-, en beveiliging strategie voor de Klimaattechniek",
      Instituut: "",
      Startdatum: "1 sep. 2005",
      Einddatum: "30 jun. 2022",
      "Overige informatie": "",
      "Is certificaat": null,
    },
  ],
  work: [
    {
      Functietitel: "Lead Engineer",
      Werkgever: "Retail Technics B.V. te Nijkerk",
      Startdatum: "1 apr. 2022",
      Einddatum: "31 jan. 2023",
      Beschrijving:
        "Retail Technics BV is een kleine installateur, die actief is in; nieuw- en verbouw van supermarkten\nen groothandel, waar koelen, vriezen, verwarmen, luchtbehandeling en elektrotechnische installaties\nnodig zijn. Bij Retail Technics BV ben ik werkzaam als lead engineer.\n\nIn deze functie heb ik de volgende verantwoordelijkheden:\n*       Verantwoordelijk voor projectbegeleiding vanaf aanvraag tot oplevering;\n*       Technisch beoordelen van offerte aanvragen en orders;\n*       Veelvuldig contact met diverse stakeholders;\n*       Het direct leiding geven aan 9 werknemers in de binnendienst;\n*       Calculeren van koeltechnische leidingsystemen;\n*       Ontwerpen en berekenen van werktuigbouwkundige gebouw gebonden installaties;\n*       Aan de hand van ruwe schetsen het tekenwerk corrigeren, maken en completeren;\n*       Tekenwerk en overige werkzaamheden controleren via Autocad, Revit en BIM 360.",
    },
    {
      Functietitel: "Engineer",
      Werkgever: "Cool-Spot B.V. te Huizen",
      Startdatum: "1 nov. 2021",
      Einddatum: "31 mrt. 2022",
      Beschrijving:
        "specialiseert in koeloplossingen voor bars en professionele keukens. Ik ben bij Cool-Spot begonnen\ngedurende de corona periode als Engineer.\n\nIn deze functie had ik de volgende verantwoordelijkheden:\n*       Verantwoordelijk voor projectbegeleiding vanaf opstart tot eindfase;\n*       Het plaatsen van bestellingen bij leveranciers van productiematerialen;\n*       Berekenen van de (productie)capaciteitsbehoefte;\n*       Plannen van onderhoud aan productie-installaties;\n*       Monitoren en optimaliseren van de productieperformance;\n*       Opstellen, rapporteren en coördineren van de kritieke prestatie indicatoren;\n*       Berekenen van kosten van productieorders in voor- en nacalculatie;\n*       Formuleren van eventuele verbeterprocessen en adviseren van het management.",
    },
    {
      Functietitel: "Engineer",
      Werkgever: "ECR-Nederland B.V. te Hoofddorp",
      Startdatum: "1 jan. 2015",
      Einddatum: "31 dec. 2021",
      Beschrijving:
        "ECR-Nederland is een koeltechnisch distributeur en is actief in de verkoop van componenten en de\ninstallatie van op maat gemaakte prefab koelinstallatie units. Ook voor ECR-Nederland ben ik\nwerkzaam geweest als engineer.\n\nIn deze functie had ik de volgende verantwoordelijkheden:\n*       Verwerken binnenkomende offerteaanvragen en opstellen van offertes;\n*       Veelvuldig schakelen met diverse stakeholders;\n*       Afnemers voorzien van commerciële en technische documentatie.",
    },
    {
      Functietitel: "Projectleider",
      Werkgever: "STULZ Groep B.V. te Amstelveen",
      Startdatum: "1 jan. 2007",
      Einddatum: "1 jan. 2015",
      Beschrijving:
        "STULZ is een organisatie die actief is in de klimaatbeheersing en zijn gespecialiseerd in; precisie\nkoeling, luchtbehandeling, comfort koeling, bevochtiging en warmtepompen. Voor STULZ ben ik werkzaam\ngeweest als Projectleider.\n\nIn deze functie had ik de volgende verantwoordelijkheden:\n*       Verantwoordelijk voor projectbegeleiding vanaf A tot Z;\n*       Op frequente basis schakelen met de directe eind klant of installateur;\n*       Bestellen van apparatuur en bijbehorende artikelen conform opdracht;\n*       Het controleren van inkoopfacturen en documenten gereed maken voor facturatie;\n*       Calculaties maken van werktuigkundige installaties;\n*       Ontwerpen van werktuigbouwkundige gebouw gebonden installaties;\n*       Aan de hand van ruwe schetsen het tekenwerk corrigeren, maken en completeren;\n*       Tekenwerk en overige werkzaamheden controleren.",
    },
    {
      Functietitel: "Service engineer",
      Werkgever: "YORK Benelux te Apeldoorn (Johnson Controls)",
      Startdatum: "1 jan. 2002",
      Einddatum: "1 jan. 2007",
      Beschrijving:
        "YORK is een koeltechniek label van Johnson Controls. Hier ben ik werkzaam geweest als Service\nengineer.\n\nIn deze functie heb ik de volgende verantwoordelijkheden:\n*       Het volgen van de voorschriften op het gebied van KAM/ VGM.;\n*       Het aanleveren van adviezen voor cross en upselling;\n*       Werkvoorbereidings taken;\n*       Het adviseren bij nieuwe contracten en grote extra werkklussen;\n*       Een compleet inspectierapport opstellen;\n*       Vervanging van pakkingen, o-ringen, PTFE-ringen, tab-ringen en sluit-ringen;\n*       Controleren van de uitlijning van de as t.o.v. de elektromotor;\n*       Controleren van de compressoren aan de hand van fabrieksinstructies\nvoor inbedrijfstelling;\n*       Planning maken voor periodieke controle en onderhoudswerkzaamheden",
    },
    {
      Functietitel: "Service engineer",
      Werkgever: "Electrolux bedrijfskoeling B.V. te Culemborg (Carrier)",
      Startdatum: "1 jan. 1996",
      Einddatum: "1 jan. 2002",
      Beschrijving:
        "branche. Zij bieden diverse koeloplossingen voor groothandelaren en supermarkten.\n\nIn deze functie heb ik de volgende verantwoordelijkheden:\n*       Het uitvoeren van onderhoud, serviceverlening, revisie-, reparatie-, en\ninstallatiewerkzaamheden voornamelijk op het gebied van klimaat-, koel-, elektro-, meet en\nregeltechniek;\n*       Het adviseren bij nieuwe contracten en grote extra werkklussen;\n*       Een compleet inspectierapport opstellen;\n*       Het inventariseren van alle koeltechnische installaties binnen het onderhoudscontract;\n*       Planning maken voor periodieke controle en onderhoudswerkzaamheden;\n*       Het registreren van koudemiddelbalans d.m.v. softwareprogramma.",
    },
    {
      Functietitel: "Militaire dienst",
      Werkgever: "Koninklijke Marine te Den Helder",
      Startdatum: "1 jan. 1990",
      Einddatum: "1 jan. 1996",
      Beschrijving:
        "Over mijn periode bij de Koninklijke Marine mag ik helaas niks over zeggen.",
    },
  ],
  Roepnaam: "Mino",
  Geboortedatum: "1 jan. 1969",
  Nationaliteit: "Nederlandse",
  Woonplaats: "Hilversum",
  Rijbewijs: "--- kies ---",
  Persoonsprofiel:
    "Mijn naam is Mino, ik ben 53 jaar en ik woon met mijn gezin in Hilversum. Van origine kom ik uit Curaçao, maar sinds ruim 30 jaar ben ik woon achtig in Nederland. In mijn vrije tijd haal ik er plezier uit om buiten te zijn. Verder vind ik het leuk om de meet en regeltechniek in onze eigen woning te optimaliseren.\n \n Naast de optimalisatie van de woning, vind ik het ook belangrijk om zelf te blijven optimaliseren. Daarom verdiep ik mij momenteel in de verduurzaming van de meet en regeltechniek. Mijn vrienden en familie omschrijven mij als een gedreven, communicatief vaardige en professionele man, die kwaliteit, innovatie en duurzaamheid hoog in het vaandel heeft staan.\n \n Mijn liefde voor de techniek is ooit begonnen door mijn familie in Curaçao. Zo ging ik op advies van mijn vader naar de opleiding elektrotechniek, hier heb ik ook een basis in. Door de jaren heen heb ik mijzelf gespecialiseerd in de klimaatbeheersingstechniek en de koeltechniek. Ik heb ruime kennis en ervaring opgedaan als engineer en als project leider. Het meeste plezier haal ik uit mijn werk, als ik in combinatie met de techniek, vanuit duurzaam en innovatief oogpunt, een project leidende functie bekleed.\n \n Voor mijn volgende stap ben ik daarom ook opzoek naar een organisatie die net zoals ik, kwaliteit, innovatie en duurzaamheid belangrijk vind.",
};

henk = async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  await sleep(250);

  // Tyf alles weg
  document
    .querySelector(".cvSection-Educations ul.slds-accordion > div > button")
    .click();
  await sleep(250);
  document
    .querySelector(
      "section.slds-modal.slds-fade-in-open footer > button.slds-button_brand"
    )
    .click();
  await sleep(250);
  document
    .querySelector(
      ".cvSection-WorkExperiences ul.slds-accordion > div > button"
    )
    .click();
  await sleep(250);
  document
    .querySelector(
      "section.slds-modal.slds-fade-in-open footer > button.slds-button_brand"
    )
    .click();
  await sleep(250);

  // New new new new new
  for (let i = 0; i < data.education.length; i++) {
    document
      .querySelector(".cvSection-Educations .slds-button.slds-button_neutral")
      .click();
    await sleep(100);
  }
  for (let i = 0; i < data.work.length; i++) {
    document
      .querySelector(
        ".cvSection-WorkExperiences .slds-button.slds-button_neutral"
      )
      .click();
    await sleep(100);
  }
  await sleep(250);

  inputsEdu = [
    ...document.querySelectorAll(
      ".cvSection-Educations.cxsGenCVSubsection .cxsrecField *:is(input,textarea)"
    ),
  ];
  inputsWorks = [
    ...document.querySelectorAll(
      ".cvSection-WorkExperiences.cxsGenCVSubsection .cxsrecField *:is(input,textarea)"
    ),
  ];

  data.education.forEach((block, i) => {
    inputsEdu[i * 7].value = block.Niveau;
    inputsEdu[i * 7 + 1].value = block.Opleiding;
    inputsEdu[i * 7 + 2].value = block.Instituut;
    inputsEdu[i * 7 + 3].value = block.Startdatum;
    inputsEdu[i * 7 + 4].value = block.Einddatum;
    inputsEdu[i * 7 + 5].value = block["Overige informatie"];
    inputsEdu[i * 7 + 6].checked = block["Is certificaat"] === "on";
  });
};

henk();
