import { definePlugin } from "@decky/api";
import {
  ButtonItem,
  Dropdown,
  PanelSection,
  PanelSectionRow,
  staticClasses,
  ToggleField,
} from "@decky/ui";
import { useState } from "react";
import { FaBolt } from "react-icons/fa";

const eGpuModes = ["auto", "internal", "external"] as const;
type EGpuMode = (typeof eGpuModes)[number];

const Content = () => {
  const [mode, setMode] = useState<EGpuMode>("auto");
  const [status, setStatus] = useState("Waiting for eGPU action");

  const modeLabel = {
    auto: "Automatic selection",
    internal: "Use internal GPU only",
    external: "Use external GPU only",
  }[mode];

  const handleDetect = () => {
    setStatus("Checking connected display adapters...");
  };

  const handleToggle = () => {
    setStatus(`Switching to ${modeLabel.toLowerCase()}...`);
  };

  return (
    <PanelSection title="x-egpu">
      <PanelSectionRow>
        <div style={{ color: "#dfe7ff", fontSize: "12px", padding: "4px 0", whiteSpace: "pre-wrap" }}>
          {status}
        </div>
      </PanelSectionRow>

      <PanelSectionRow>
        <Dropdown
          rgOptions={eGpuModes.map((option) => ({ label: option, data: option }))}
          selectedOption={mode}
          onChange={(selected) => setMode(selected.data as EGpuMode)}
        />
      </PanelSectionRow>

      <PanelSectionRow>
        <ButtonItem layout="below" onClick={handleDetect}>
          Detect eGPU
        </ButtonItem>
      </PanelSectionRow>

      <PanelSectionRow>
        <ButtonItem layout="below" onClick={handleToggle}>
          Apply GPU mode
        </ButtonItem>
      </PanelSectionRow>

      <PanelSectionRow>
        <ToggleField label="Enable quick switch" checked={true} onChange={() => undefined} />
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin(() => {
  return {
    title: <div className={staticClasses.Title}>x-egpu</div>,
    content: <Content />,
    icon: <FaBolt />,
    onDismount() {
      // no-op for now
    },
  };
});
