const foodData = [
    // North 
    { name: "Butter Chicken (1 cup)", calories: 440, cuisine: "North", category: "Non-Veg" },
    { name: "Tandoori Chicken (1 piece)", calories: 300, cuisine: "North", category: "Non-Veg" },
    { name: "Dal Makhani (1 cup)", calories: 300, cuisine: "North", category: "Veg" },
    { name: "Paneer Butter Masala (1 cup)", calories: 360, cuisine: "North", category: "Veg" },
    { name: "Aloo Paratha (1 piece)", calories: 180, cuisine: "North", category: "Veg" },
    { name: "Chole Bhature (1 plate)", calories: 450, cuisine: "North", category: "Veg" },
    { name: "Rajma Chawal (1 plate)", calories: 340, cuisine: "North", category: "Veg" },
    { name: "Palak Paneer (1 cup)", calories: 280, cuisine: "North", category: "Veg" },
    { name: "Naan (1 piece)", calories: 260, cuisine: "North", category: "Veg" },
    { name: "Kulcha (1 piece)", calories: 150, cuisine: "North", category: "Veg" },
  
    // South
    { name: "Dosa (1 piece)", calories: 168, cuisine: "South", category: "Veg" },
    { name: "Idli (1 piece)", calories: 39, cuisine: "South", category: "Veg" },
    { name: "Vada (1 piece)", calories: 90, cuisine: "South", category: "Veg" },
    { name: "Uttapam (1 piece)", calories: 250, cuisine: "South", category: "Veg" },
    { name: "Rasam (1 cup)", calories: 60, cuisine: "South", category: "Veg" },
    { name: "Sambar (1 cup)", calories: 150, cuisine: "South", category: "Veg" },
    { name: "Appam (1 piece)", calories: 120, cuisine: "South", category: "Veg" },
    { name: "Chicken Chettinad (1 cup)", calories: 350, cuisine: "South", category: "Non-Veg" },
    { name: "Fish Curry (1 cup)", calories: 240, cuisine: "South", category: "Non-Veg" },
    { name: "Avial (1 cup)", calories: 150, cuisine: "South", category: "Veg" },
  
    // Bengali
    { name: "Shorshe Ilish (1 piece)", calories: 250, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Chingri Malai Curry (1 cup)", calories: 280, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Macher Jhol (1 cup)", calories: 200, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Kosha Mangsho (1 cup)", calories: 360, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Panta Bhat (1 cup)", calories: 130, cuisine: "Bengali", category: "Veg" },
    { name: "Aloo Posto (1 cup)", calories: 190, cuisine: "Bengali", category: "Veg" },
    { name: "Beguni (1 piece)", calories: 120, cuisine: "Bengali", category: "Veg" },
    { name: "Luchi (1 piece)", calories: 120, cuisine: "Bengali", category: "Veg" },
    { name: "Shukto (1 cup)", calories: 150, cuisine: "Bengali", category: "Veg" },
    { name: "Cholar Dal (1 cup)", calories: 180, cuisine: "Bengali", category: "Veg" },
    { name: "Vegetable Khichdi (1 plate)", calories: 250, cuisine: "Bengali", category: "Veg" },
    { name: "Mishti Doi (1 cup)", calories: 250, cuisine: "Bengali", category: "Veg" },
    { name: "Sandesh (1 piece)", calories: 150, cuisine: "Bengali", category: "Veg" },
    { name: "Rasgulla (1 piece)", calories: 120, cuisine: "Bengali", category: "Veg" },
    { name: "Patishapta (1 piece)", calories: 180, cuisine: "Bengali", category: "Veg" },
    { name: "Nolen Gur Payesh (1 cup)", calories: 250, cuisine: "Bengali", category: "Veg" },
    { name: "Fish Fry (1 piece)", calories: 250, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Pabda Macher Jhal (1 cup)", calories: 220, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Chingri Cutlet (1 piece)", calories: 190, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Muri Ghonto (1 cup)", calories: 240, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Dim Curry (1 cup)", calories: 230, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Kumro Chingri (1 cup)", calories: 260, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Phoolkopir Dalna (1 cup)", calories: 200, cuisine: "Bengali", category: "Veg" },
    { name: "Aloo Potol Posto (1 cup)", calories: 210, cuisine: "Bengali", category: "Veg" },
    { name: "Muri (1 cup)", calories: 60, cuisine: "Bengali", category: "Veg" },
    { name: "Ghugni (1 cup)", calories: 220, cuisine: "Bengali", category: "Veg" },
    { name: "Mochar Ghonto (1 cup)", calories: 200, cuisine: "Bengali", category: "Veg" },
    { name: "Chingri Malai Cutlet (1 piece)", calories: 190, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Chital Macher Muitha (1 cup)", calories: 260, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Ilish Pulao (1 plate)", calories: 400, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Bhetki Paturi (1 piece)", calories: 270, cuisine: "Bengali", category: "Non-Veg" },
    { name: "Payesh (1 cup)", calories: 250, cuisine: "Bengali", category: "Veg" },
    { name: "Dhokar Dalna (1 cup)", calories: 220, cuisine: "Bengali", category: "Veg" },
    { name: "Labra (1 cup)", calories: 150, cuisine: "Bengali", category: "Veg" },
    { name: "Kacha Aamer Chutney (1 cup)", calories: 120, cuisine: "Bengali", category: "Veg" },

  
  
    // Street 
    { name: "Pani Puri (6 pieces)", calories: 180, cuisine: "Street", category: "Veg" },
    { name: "Vada Pav (1 piece)", calories: 300, cuisine: "Street", category: "Veg" },
    { name: "Bhel Puri (1 plate)", calories: 290, cuisine: "Street", category: "Veg" },
    { name: "Sev Puri (1 plate)", calories: 250, cuisine: "Street", category: "Veg" },
    { name: "Egg Roll (1 piece)", calories: 300, cuisine: "Street", category: "Non-Veg" },
    { name: "Chicken Roll (1 piece)", calories: 350, cuisine: "Street", category: "Non-Veg" },
    { name: "Aloo Tikki (1 piece)", calories: 120, cuisine: "Street", category: "Veg" },
    { name: "Pav Bhaji (1 plate)", calories: 400, cuisine: "Street", category: "Veg" },
    { name: "Dabeli (1 piece)", calories: 300, cuisine: "Street", category: "Veg" },
    { name: "Bread Pakora (1 piece)", calories: 170, cuisine: "Street", category: "Veg" },
  
    // Other Regional Cuisines
    { name: "Sarson ka Saag (1 cup)", calories: 120, cuisine: "Punjabi", category: "Veg" },
    { name: "Makki di Roti (1 piece)", calories: 120, cuisine: "Punjabi", category: "Veg" },
    { name: "Dhokla (100g)", calories: 160, cuisine: "Gujarati", category: "Veg" },
    { name: "Thepla (1 piece)", calories: 120, cuisine: "Gujarati", category: "Veg" },
    { name: "Undhiyu (1 cup)", calories: 190, cuisine: "Gujarati", category: "Veg" },
    { name: "Puran Poli (1 piece)", calories: 240, cuisine: "Maharashtrian", category: "Veg" },
    { name: "Misal Pav (1 plate)", calories: 430, cuisine: "Maharashtrian", category: "Veg" },
    { name: "Sabudana Khichdi (1 cup)", calories: 190, cuisine: "Maharashtrian", category: "Veg" },
  ];
  
  module.exports = foodData;

  

