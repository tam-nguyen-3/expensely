const Dashboard = () => {
  return (
    <div className="inline-flex shrink grow flex-col gap-12 px-24 py-16">
      {/* Report Section */}
      <div className="inline-flex justify-between self-stretch">
        <div className="w-48 flex-col justify-between gap-4 rounded border border-theme-green bg-theme-green-light px-3 py-4 shadow">
          <div className="shrink grow self-stretch text-xs font-bold">
            Balance this month (including savings)
          </div>
        </div>
        <div className="w-48 bg-theme-green-light px-3 py-4">2</div>
      </div>
    </div>
  );
};

export default Dashboard;
