export default function PlatformComparison() {
  return (
    <section className="section comparison-section" id="comparison">
      <div className="container">
        <div className="section-intro">
          <h2>Platform Comparison</h2>
          <p>See why major international firms trust ICEBERG over standard, aging industry software suites.</p>
        </div>

        <div className="comparison-wrapper glass-panel frost-border">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Parameters</th>
                <th className="brand-col">ICEBERG CORE</th>
                <th>MetaTrader 4</th>
                <th>MetaTrader 5</th>
                <th>cTrader</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Average Matching Time</td>
                <td className="brand-col">&lt; 0.72ms</td>
                <td>&gt; 80ms</td>
                <td>&gt; 45ms</td>
                <td>&gt; 22ms</td>
              </tr>
              <tr>
                <td>REST & FIX API Latency</td>
                <td className="brand-col">Sub-1ms API Loops</td>
                <td>Not Supported</td>
                <td>Bridge Required</td>
                <td>Restricted</td>
              </tr>
              <tr>
                <td>Branding Liberty (100% White-label)</td>
                <td className="brand-col">
                  <svg className="comp-check-icon" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </td>
                <td>Restricted</td>
                <td>Partial Branding</td>
                <td>Restricted</td>
              </tr>
              <tr>
                <td>Prop Firm Rules Enforcement Engine</td>
                <td className="brand-col">
                  <svg className="comp-check-icon" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </td>
                <td>Plugins Required</td>
                <td>Plugins Required</td>
                <td>Limited Custom</td>
              </tr>
              <tr>
                <td>Dynamic Risk & Leverage Multiplier</td>
                <td className="brand-col">
                  <svg className="comp-check-icon" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </td>
                <td>Manual Adjustment</td>
                <td>Limited Rules</td>
                <td>API Dependent</td>
              </tr>
              <tr>
                <td>Custom CRM & Portal Integrations</td>
                <td className="brand-col">
                  <svg className="comp-check-icon" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </td>
                <td>Third Party Bridge</td>
                <td>Restricted Nodes</td>
                <td>Partial Ports</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
