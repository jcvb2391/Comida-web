let ctx = document.getElementById("myChart").getContext("2d");
let labels = ["Pizza", "Taco","Hot Dog", "Sushi"]
let colorHex = ["#fb3640", "#efca08", "#43aa8b", "#253d5b"]

let myChart = new Chart(ctx, {
    type: "pie",
    data: { 
            datasets: [                      
            {
            data: [30, 10, 40, 20],
            backgroundColor: colorHex,
        },
    ],
    labels: labels,
},
},

    Options ={  
    responsive: true,
    legend: {
        position: "bottom",
},

    plugin:{ 
            datalabels:{
            color:"#000000",
            anchor: "end",
            align:"start",
            offset: -10,
            borderwidth: 2,
            bordercolor: "#000000",
            borderRadius: 25,
            backgroundColor: (context) =>{
                return context.datasets.backgroundColor
            },   
        },
    
    font: {
        weight: "bold",
        size: "10px",
    },
    formatter:(value) => {
        return value + "%"
    }
}
});