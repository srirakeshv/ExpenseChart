const arr=[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
// finding the max
let maxAmount=arr[0].amount
for (let i=1; i<arr.length; i++)
{
    if(arr[i].amount>maxAmount)
    {
        maxAmount=arr[i].amount
    }
}
// initialize
let bar=document.querySelectorAll('.bar .b')
let coverBar=document.querySelectorAll('.bar')
let popUp=document.querySelectorAll('.popup')

// hover visible
coverBar.forEach(cover=>{
  cover.addEventListener('mouseenter',()=>{
    cover.classList.toggle('mouse')
    popUp.forEach((pop,index)=>{
      popUp[index].innerHTML='$'+arr[index].amount
    })
  })
  cover.addEventListener('mouseleave',()=>{
    cover.classList.toggle('mouse')
  })
})

// bar height
bar.forEach((b,index)=>{
    let num=0
    let num1=index
    if(index==num1)
    {
        num=(arr[num1].amount/maxAmount)*100
        let h=(arr[num1].amount/maxAmount)*maxAmount
        b.style.height=h+'px'
        console.log(num.toFixed(2)+"%")
        if(arr[num1].amount===maxAmount)
        {
            b.style.background=`hsl(186, 34%, 60%)`
        }
        else{
            b.style.background=`hsl(10, 79%, 65%)`
        }
    }
})