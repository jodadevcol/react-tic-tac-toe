import './Layout.css.ts'

export default function Section({ children, otherClassSection = '', isContainer = true }) {
  const classSection = 'jd-section'
  const classContainer = isContainer ? 'jd-container' : 'jd-wrapper'

  return (
    <section className={classSection}>
      <div className={`${classContainer} ${otherClassSection}`}>
        {children}
      </div>
    </section>
  )
}
