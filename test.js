var sentiment = require('./lib')

var list = [
  'RT @HVVStoerungen U2 In Ri Mümmelmannsberg bis zu 20 Min Verspätung wegen eines schadhaften Zuges. #hvv',
  'RT @HVVStoerungen S1, S31, S21 Update Derzeit wieder planmäßiger Betrieb im S-Bahnverkehr. Verspätungen von heute morgen sind ausgefahren.',
  'RT @HVVStoerungen U3 Update Der Betrieb in Ri Barmbek läuft ab Dehnhaide wieder störungsfrei. RTW-Einsatz beendet. #hvv',
  'RT @HVVStoerungen U3 Aufgrund eines RTW-Einsatzes Dehnhaide kommt es in Ri Barmbek zu Teilausfällen & Verspätungen. #hvv',
  'RT @HVVStoerungen U1, U3 Update In Ri Norderstedt Mitte sowie Schlump - Barmbek wieder planmäßiger U-Bahnverkehr. #HVV',
  'RT @HVVStoerungen U1, U3 In Ri Norderstedt & Hbf Süd - Schlump - Barmbek derzeit 5-10 Min. Verspätung möglich. #HVV',
  'RT @HVVStoerungen U1, U3 In Ri Norderstedt &amp; Hbf Süd - Schlump - Barmbek derzeit 5-10 Min. Verspätung möglich. #HVV',
  'RT @HVVStoerungen U3 Update Der Betrieb in Ri Barmbek läuft ab Dehnhaide wieder störungsfrei. RTW-Einsatz beendet. #hvv',
  'RT @HVVStoerungen U3 Aufgrund eines RTW-Einsatzes Dehnhaide kommt es in Ri Barmbek zu Teilausfällen & Verspätungen. #hvv',
  'RT @HVVStoerungen U3 Aufgrund eines RTW-Einsatzes Dehnhaide kommt es in Ri Barmbek zu Teilausfällen &amp; Verspätungen. #hvv',
  'RT @HVVStoerungen U2 U3 U4 Update Die Verspätungen sind ausgefahren. Die Linien verkehren wieder nach Fahrplan. #HVV',
  'RT @HVVStoerungen RT @hochbahn: #U2 #U3 #U4 halten ab sofort auch wieder am Berliner Tor. #hvv',
  'RT @HVVStoerungen U2 U3 U4 verspäten sich jedoch dadurch aktuell um 5-10 Min. durch deutlich längere Fahrgastwechsel! #HVV https://t.co/nUul',
  'RT @HVVStoerungen U2, U4 Durch den RTW-Einsatz Berliner Tor aktuell bis zu 10 Min verspätet U1, U3 derzeit bis zu 5 Min später im Bereich Lü',
  'RT @HVVStoerungen U2 U3 U4 fahren aktuell ohne Halt durch Berliner Tor Richtung Innenstadt. Grund: Rettungswageneinsatz.',
  'RT @HVVStoerungen U1 In Ri Norderstedt wegen einer techn. Störung ab Farmsen derzeit 5-10 Min. verspätete Züge. #HVV',
  'RT @HVVStoerungen S21, A1, S3 Aufgrund einer Signalstörung zw. Elbgaustr./Eidelstedt & Diebsteich/Altona derzeit 10-15 Min. verspätete Züge.',
  'RT @HVVStoerungen S1 Update Der Betrieb läuft nun auch wieder zwischen Wedel<>Sülldorf. Betriebsstörung ist beendet. #HVV',
  'RT @HVVStoerungen RT @SBahnHamburg: #S1 Heute bis Betriebsschluss noch Busse statt S-Bahnen zw. Barmbek<>Ohlsdorf. Grund: Bauarbeiten. #sbah',
  'RT @SBahnHamburg #HVV #S1 Heute bis Betriebsschluss noch Busse statt S-Bahnen zwischen Barmbek<>Ohlsdorf. Grund: Bauarbeiten. #sbahnhh',
  'RT @HVVStoerungen S1 Derzeit kein Betrieb Sülldorf<>Wedel wegen einer Betriebsstörung. #HVV',
  'RT @HVVStoerungen S1 Derzeit kein Betrieb Sülldorf&lt;&gt;Wedel wegen einer Betriebsstörung. #HVV',
  'RT @HVVStoerungen S3 >>Pinneberg ab Stade 4:35, ab Buxtehude 4:55h ca. 20 Min später aufgrund eines Polizeieinsatzes. #HVV',
  'RT @HVVStoerungen S3 >>Elbgaustr. ab Reeperbahn 4:04h, ab Altona 4:10h ca 15 Min. später wg Polizeieinsatzes. #HVV',
  'RT @HVVStoerungen U1 >>Norderstedt Mitte ab Wandsbek-Markt 23:25h ca. 7 Min. später aufgrund einer Signalstörung in Volksdorf. #HVV',
  'RT @HVVStoerungen S1 Korrektur: Erw. Streckensperrung Hasselbrook <> Ohlsdorf ab heute (Sa.) 23:50h bis So. früh ca. 6 Uhr gültig. Sonst: Ba',
  'RT @SBahnHamburg Heute, 23:50 Uhr, bis morgen, 6:00 Uhr, Verlängerung des baubedingten Ersatzverkehrs. Busse dann zw. Hasselbrook<>Ohlsdorf.'
]

list.forEach((tweet) => {
  var r1 = sentiment(tweet, 'de_de-public-transport')
  console.log(r1.score, tweet)
})

DE03200505501352150393
