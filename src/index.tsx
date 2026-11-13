import { definePlugin, PanelSection, PanelSectionRow, ButtonItem, Dropdown, ToggleField } from "decky-frontend-lib";
import { useMemo, useState } from "react";
import "./style.css";

const eGpuModes = ["auto", "internal", "external"] as const;

type EGpuMode = (typeof eGpuModes)[number];

const XEgpuPlugin = () => {
  const [mode, setMode] = useState<EGpuMode>("auto");
  const [status, setStatus] = useState("Waiting for eGPU action");

  const modeLabel = useMemo(() => {
    switch (mode) {
      case "auto":
        return "Automatic selection";
      case "internal":
        return "Use internal GPU only";
      case "external":
        return "Use external GPU only";
      default:
        return "Automatic selection";
    }
  }, [mode]);

  const handleDetect = () => {
    setStatus("Checking connected display adapters...");
  };

  const handleToggle = () => {
    setStatus(`Switching to ${modeLabel.toLowerCase()}...`);
  };

  return (
    <>
      <PanelSection title="x-egpu">
        <PanelSectionRow>
          <div className="x-egpu__status">{status}</div>
        </PanelSectionRow>

        <PanelSectionRow>
          <Dropdown
            label="GPU mode"
            rgOptions={eGpuModes.map((option) => ({ label: option, data: option }))}
            selectedOption={mode}
            onChange={(value) => setMode(value as EGpuMode)}
          />
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem onClick={handleDetect}>Detect eGPU</ButtonItem>
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem onClick={handleToggle}>Apply GPU mode</ButtonItem>
        </PanelSectionRow>

        <PanelSectionRow>
          <ToggleField
            label="Enable quick switch"
            checked={true}
            onChange={() => undefined}
          />
        </PanelSectionRow>
      </PanelSection>
    </>
  );
};

export default definePlugin(() => {
  return <XEgpuPlugin />;
});
