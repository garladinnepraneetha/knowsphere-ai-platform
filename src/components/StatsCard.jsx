function StatsCard({ title, value }) {
return ( <div className="bg-white p-5 rounded-lg shadow"> <h3>{title}</h3> <h2 className="text-3xl font-bold">
{value} </h2> </div>
);
}

export default StatsCard;
