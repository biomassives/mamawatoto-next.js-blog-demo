import Container from "./container";
import cn from "classnames";

export default function Alert({ nopreview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": nopreview,
        "bg-accent-1 border-accent-2": !nopreview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
        {nopreview ? (
            <>
              Earn a tradeable supporter token for our Climate Action NFT program .{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              Earn a tradeable supporter token for our Climate Action NFT program .{" "}
              <a
                href="/posts/climate-action-nft-program"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to learn how.
            </>
          )}

        </div>
      </Container>
    </div>
  );
}
