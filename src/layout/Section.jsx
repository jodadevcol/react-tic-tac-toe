export default function Section({ children, otherClassSection, isContainer = true }) {
  const classSection = `jd-section ${otherClassSection}`
  const classContainer = isContainer ? 'jd-container' : 'jd-wrapper'

  return (
    <section className={classSection}>
      <div className={classContainer}>
        {children}
      </div>
    </section>
  )
}
