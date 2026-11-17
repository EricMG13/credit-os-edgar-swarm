import { useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type {
  ButtonProps as AriaButtonProps,
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps as AriaTooltipTriggerComponentProps,
} from "react-aria-components";
import {
  Button as AriaButton,
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  TooltipTriggerStateContext,
} from "react-aria-components";
import { cx } from "@/utils/cx";

export interface TooltipProps
  extends AriaTooltipTriggerComponentProps, Omit<AriaTooltipProps, "children"> {
  /**
   * The title of the tooltip.
   */
  title: ReactNode;
  /**
   * The description of the tooltip.
   */
  description?: ReactNode;
  /**
   * Delay in milliseconds before the tooltip is shown.
   *
   * @default 300
   */
  delay?: number;
}

/**
 * Whether a tooltip may be drawn: the trigger state is open and one animation frame has passed
 * since it opened (a tooltip already open when it mounts is drawn at once).
 *
 * React Aria closes a tooltip on any scroll of an ancestor of its trigger. Keyboard focus that
 * scrolls the trigger into view makes the browser raise that scroll event in the next frame,
 * before that frame's animation-frame callbacks, so a tooltip drawn at once is closed again by
 * the scroll the same focus caused. Drawn after that frame, it is placed against the trigger's
 * final position and no scroll event of the focus is left to close it.
 */
function useOpenAfterFrame(isOpen: boolean): boolean {
  const [isReady, setReady] = useState(isOpen);
  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => {
      cancelAnimationFrame(frame);
      setReady(false);
    };
  }, [isOpen]);
  return isOpen && isReady;
}

const SettledTooltip = (props: AriaTooltipProps) => {
  const state = useContext(TooltipTriggerStateContext);
  const isOpen = useOpenAfterFrame(state?.isOpen ?? false);
  return state === null ? (
    <AriaTooltip {...props} />
  ) : (
    <TooltipTriggerStateContext value={{ ...state, isOpen }}>
      <AriaTooltip {...props} />
    </TooltipTriggerStateContext>
  );
};

export const Tooltip = ({
  title,
  description,
  children,
  delay = 300,
  closeDelay = 0,
  trigger,
  isDisabled,
  isOpen,
  defaultOpen,
  offset = 6,
  crossOffset,
  placement = "top",
  onOpenChange,
  ...tooltipProps
}: TooltipProps) => {
  const isTopOrBottomLeft = ["top left", "top end", "bottom left", "bottom end"].includes(
    placement,
  );
  const isTopOrBottomRight = ["top right", "top start", "bottom right", "bottom start"].includes(
    placement,
  );
  // Set negative cross offset for left and right placement to visually balance the tooltip.
  const calculatedCrossOffset = isTopOrBottomLeft ? -12 : isTopOrBottomRight ? 12 : 0;

  return (
    <AriaTooltipTrigger
      {...{ trigger, delay, closeDelay, isDisabled, isOpen, defaultOpen, onOpenChange }}
    >
      {children}

      <SettledTooltip
        {...tooltipProps}
        offset={offset}
        placement={placement}
        crossOffset={crossOffset ?? calculatedCrossOffset}
        className={({ isEntering, isExiting }) =>
          cx(isEntering && "ease-out animate-in", isExiting && "ease-in animate-out")
        }
      >
        {({ isEntering, isExiting }) => (
          <div
            className={cx(
              "z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform",
              description ? "py-3" : "py-2",

              isEntering &&
                "ease-out animate-in fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5",
              isExiting &&
                "ease-in animate-out fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5",
            )}
          >
            <span className="text-xs font-semibold text-white">{title}</span>

            {description && (
              <span className="text-xs font-medium text-tooltip-supporting-text">
                {description}
              </span>
            )}
          </div>
        )}
      </SettledTooltip>
    </AriaTooltipTrigger>
  );
};

type TooltipTriggerProps = AriaButtonProps;

export const TooltipTrigger = ({ children, className, ...buttonProps }: TooltipTriggerProps) => {
  return (
    <AriaButton
      {...buttonProps}
      className={(values) =>
        cx(
          "h-max w-max outline-hidden",
          typeof className === "function" ? className(values) : className,
        )
      }
    >
      {children}
    </AriaButton>
  );
};
