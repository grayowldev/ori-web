'use client'
export default function OrderForm() {
    async function handleSubmit(event:any) {
        event.preventDefault();

        const data = {
            description : String(event.target.description.value),
            grossWeight: Number(event.target.grossWeight.value),
            stoneWeight: Number(event.target.stoneWeight.value),
            netWeight: Number(event.target.netWeight.value),
            pureWeight: Number(event.target.pureWeight.value),
            karat: Number(event.target.karat.value),
            rate: Number(event.target.rate.value),
            amount: Number(event.target.amount.value),
        }

        const response = await fetch("http://localhost:8080/ori/ordering", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log("worked")
            console.log(response)
        } else {
            console.log("Failed")
        }
    }

    return (
        <>
            <h1>New Purchase Order</h1>
            <form onSubmit={handleSubmit}>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="description">Description</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"description"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="grossWeight" >Gross Weight</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"grossWeight"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="karat">Karat</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"karat"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="stoneWeight">Stone Weight</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"stoneWeight"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="netWeight">Net Weight</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"netWeight"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="pureWeight">Pure Weight</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"pureWeight"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="rate">Rate</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"rate"}/>
                </div>

                <div className={"ml-28px mb-1"}>
                    <label htmlFor="amount">Amount</label>
                </div>
                <div className={"ml-28px mb-4"}>
                    <input className={"input input-bordered input-warning w-full max-w-xs"} name={"amount"}/>
                </div>
                <div className={"ml-28px mb-4"}>
                    <button className={"btn btn-warning m-auto ml-auto"} type="submit">Create Order</button>
                </div>

            </form>
        </>
    )
}