import MainCanvas from '../../components/MainCanvas/MainCanvas'
import PlotInputs from '../../components/PlotInputs.jsx/PlotInputs'

export default function Drawing() {
  return (
    <div className='w-full h-full'>
      {/* INPUTS */}
      <PlotInputs />
      {/* SIDER */}
      {/* MAIN AREA */}
      <MainCanvas />
      {/* LEGEND */}
    </div>
  )
}
